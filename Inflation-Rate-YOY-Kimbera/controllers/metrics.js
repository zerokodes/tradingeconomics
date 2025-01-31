require("dotenv").config();
const axios = require("axios");

const api_key = process.env.API_KEY;

// Function to fetch Inflation Rate Yoy data for the last decade
async function fetchInflationRateData() {
  try {
    const response = await axios.get(
      `https://api.tradingeconomics.com/calendar/ticker/MXCPYOY/2024-05-09/2025-01-09?c=${api_key}`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching Inflation Rate Yoy data:`, error.message);
    return null;
  }
}

// Function to fetch Kimbera historical data for a specific date
async function fetchKimberaData(date) {
  try {
    const response = await axios.get(
      `https://api.tradingeconomics.com/markets/historical/KIMBERA:MM?c=${api_key}&d1=${date}&d2=${date}`
    );
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching Kimbera data for date ${date}:`,
      error.message
    );
    return null;
  }
}

// Function to calculate average high range
const calculateAverageDailyHighRange = async (req, res) => {
  try {
    let sum = 0;
    let averageHighRange = 0;
    const inflationData = await fetchInflationRateData();
    console.log("Next step");
    if (!inflationData || inflationData.length === 0) {
      return res.status(404).json({
        success: true,
        message: "No Inflation Rate Yoy data found",
        code: 404,
      });
    }
    console.log("To the for loop", inflationData.length);
    for (let i = 0; i < inflationData.length - 1; i++) {
      const inflationDatum = inflationData[i];
      const dateObj = new Date(inflationDatum.Date);
      const date = dateObj.toISOString().split("T")[0];

      const kimberaDatum = await fetchKimberaData(date);
      console.log("fuk it", kimberaDatum.length);
      if (!kimberaDatum || kimberaDatum.length === 0) {
        return res.status(404).json({
          success: true,
          message: `No Kimber data of this date ${date} is found`,
          code: 404,
        });
      }

      const high = parseFloat(kimberaDatum[0].High);
      const open = parseFloat(kimberaDatum[0].Open);
      const difference = high - open;
      sum += difference;
    }
    averageHighRange = sum / inflationData.length;
    res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: averageHighRange,
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error calculating Average High Range",
      error: error.message,
      code: 500,
    });
  }
};

// Function to calculate average low range
const calculateAverageDailyLowRange = async (req, res) => {
  try {
    let sum = 0;
    let averageLowRange = 0;
    const inflationData = await fetchInflationRateData();
    console.log("Next step");
    if (!inflationData || inflationData.length === 0) {
      return res.status(404).json({
        success: true,
        message: "No Inflation Rate Yoy data found",
        code: 404,
      });
    }
    console.log("To the for loop", inflationData.length);
    for (let i = 0; i < inflationData.length - 1; i++) {
      const inflationDatum = inflationData[i];
      const dateObj = new Date(inflationDatum.Date);
      const date = dateObj.toISOString().split("T")[0];

      const kimberaDatum = await fetchKimberaData(date);
      console.log("fuk it", kimberaDatum.length);
      if (!kimberaDatum || kimberaDatum.length === 0) {
        return res.status(404).json({
          success: true,
          message: `No Kimber data of this date ${date} is found`,
          code: 404,
        });
      }

      const low = parseFloat(kimberaDatum[0].Low);
      const open = parseFloat(kimberaDatum[0].Open);
      const difference = open - low;
      sum += difference;
    }
    averageLowRange = sum / inflationData.length;
    res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: averageLowRange,
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error calculating Average Low Range",
      error: error.message,
      code: 500,
    });
  }
};

// Function to calculate average total range
const calculateAverageDailyTotalRange = async (req, res) => {
  try {
    let sum = 0;
    let averageTotalRange = 0;
    const inflationData = await fetchInflationRateData();
    console.log("Next step");
    if (!inflationData || inflationData.length === 0) {
      return res.status(404).json({
        success: true,
        message: "No Inflation Rate Yoy data found",
        code: 404,
      });
    }
    console.log("To the for loop", inflationData.length);
    for (let i = 0; i < inflationData.length - 1; i++) {
      const inflationDatum = inflationData[i];
      const dateObj = new Date(inflationDatum.Date);
      const date = dateObj.toISOString().split("T")[0];

      const kimberaDatum = await fetchKimberaData(date);
      console.log("fuk it", kimberaDatum.length);
      if (!kimberaDatum || kimberaDatum.length === 0) {
        return res.status(404).json({
          success: true,
          message: `No Kimber data of this date ${date} is found`,
          code: 404,
        });
      }

      const low = parseFloat(kimberaDatum[0].Low);
      const high = parseFloat(kimberaDatum[0].High);
      const difference = high - low;
      sum += difference;
    }
    averageTotalRange = sum / inflationData.length;
    res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: averageTotalRange,
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error calculating Average Total Range",
      error: error.message,
      code: 500,
    });
  }
};

// Function to calculate average daily volume range
const calculateAverageDailyVolumeRange = async (req, res) => {
  try {
    let sum = 0;
    let averageVolumeRange = 0;
    const inflationData = await fetchInflationRateData();
    console.log("Next step");
    if (!inflationData || inflationData.length === 0) {
      return res.status(404).json({
        success: true,
        message: "No Inflation Rate Yoy data found",
        code: 404,
      });
    }
    console.log("To the for loop", inflationData.length);
    for (let i = 0; i < inflationData.length - 1; i++) {
      const inflationDatum = inflationData[i];
      const dateObj = new Date(inflationDatum.Date);
      const date = dateObj.toISOString().split("T")[0];

      const kimberaDatum = await fetchKimberaData(date);
      console.log("fuk it", kimberaDatum.length);
      if (!kimberaDatum || kimberaDatum.length === 0) {
        return res.status(404).json({
          success: true,
          message: `No Kimber data of this date ${date} is found`,
          code: 404,
        });
      }

      const open = parseFloat(kimberaDatum[0].Open);
      const close = parseFloat(kimberaDatum[0].Close);
      const difference = Math.abs(open - close);
      sum += difference;
    }
    averageVolumeRange = sum / inflationData.length;
    res.status(200).json({
      success: true,
      message: "Fetch successful",
      data: averageVolumeRange,
      code: 200,
    });
  } catch (error) {
    return res.status(500).json({
      success: true,
      message: "Error calculating Average Daily Volume Range",
      error: error.message,
      code: 500,
    });
  }
};

module.exports = {
  calculateAverageDailyHighRange,
  calculateAverageDailyLowRange,
  calculateAverageDailyTotalRange,
  calculateAverageDailyVolumeRange,
};
