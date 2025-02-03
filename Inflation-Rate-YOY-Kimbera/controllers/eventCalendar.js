require("dotenv").config();
const axios = require("axios");
const EventCalendar = require("../model/EventCalendar");

const api_key = process.env.API_KEY;

// Function to fetch Inflation Rate Yoy data for the last decade
async function fetchInflationRateData() {
  try {
    //Fetch API data
    const response = await axios.get(
      `https://api.tradingeconomics.com/calendar/ticker/MXCPYOY?c=${api_key}`
    );

    if (!response.data || response.data.length === 0) {
      console.log("No data found from API.");
      return;
    }

    //save the generated response from the api to the database
    const eventData = response.data.slice(0, -1);
    for (const item of eventData) {
      const eventObject = {
        date: item.Date.split("T")[0],
        event: item.Event || "Unknown Event",
        actual: item.Actual || "N/A",
        forecast: item.Forecast || "N/A",
        previous: item.Previous || "N/A",
      };

      // Insert or update event in MongoDB
      await EventCalendar.findOneAndUpdate(
        { date: eventObject.date }, // Query (Find by date)
        eventObject, // Update data
        { upsert: true, new: true } // Insert if not found
      );

      console.log(`Saved event for date: ${eventObject.date}`);
    }
    console.log("All records processed successfully.");

    return res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: eventData,
      code: 200,
    });
  } catch (error) {
    console.error(`Error fetching Inflation Rate Yoy data:`, error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

const fetchAllEventCalendar = async (req, res) => {
  try {
    const inflationData = await EventCalendar.find().sort({ date: -1 }); // Sort by latest date first

    if (!inflationData || inflationData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No inflation data found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Inflation data retrieved successfully",
      data: inflationData,
    });
  } catch (error) {
    console.error("Error retrieving inflation data:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  fetchAllEventCalendar,
  fetchInflationRateData,
};
