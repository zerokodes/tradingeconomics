require("dotenv").config();
const axios = require("axios");
const MarketData = require("../model/MarketData");

const api_key = process.env.API_KEY;

// Function to fetch Kimbera historical data for a specific date
const fetchKimberaData = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.tradingeconomics.com/markets/historical/KIMBERA:MM?c=${api_key}`
    );

    if (!response.data || response.data.length === 0) {
      console.log("No data found from API.");
      return;
    }

    //save the generated response from the api to the database
    const marketData = response.data.slice(0, -1);
    for (const item of marketData) {
      const marketDataObject = {
        symbol: item.Symbol || "N/A",
        date: item.Date.split("T")[0],
        openPrice: item.Open || "N/A",
        highestPrice: item.High || "N/A",
        lowestPrice: item.Low || "N/A",
        closePrice: item.Close || "N/A",
      };

      // Insert or update event in MongoDB
      await MarketData.findOneAndUpdate(
        { date: marketDataObject.date }, // Query (Find by date)
        marketDataObject, // Update data
        { upsert: true, new: true } // Insert if not found
      );
      console.log(`Saved event for date: ${marketDataObject.date}`);
    }
    console.log("All records processed successfully.");

    return res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: marketData,
      code: 200,
    });
  } catch (error) {
    console.error(`Error fetching Inflation Rate Yoy data:`, error.message);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const fetchAllKimberaData = async (req, res) => {
  try {
    const marketData = await MarketData.find().sort({ date: -1 }); // Sort by latest date first

    if (!marketData || marketData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No inflation data found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Market data retrieved successfully",
      data: marketData,
    });
  } catch (error) {
    console.error("Error retrieving market data:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  fetchKimberaData,
  fetchAllKimberaData,
};
