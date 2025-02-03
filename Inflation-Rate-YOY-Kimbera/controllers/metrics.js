require("dotenv").config();
const axios = require("axios");
const MarketData = require("../model/MarketData");
const Metrics = require("../model/Metrics");

// Function to calculate average high range
const calculateAverageDailyHighRange = async (req, res) => {
  try {
    let sum = 0;
    let averageHighRange = 0;

    const marketData = await MarketData.find().sort({ date: -1 }); // Sort by latest date first
    console.log(marketData.length);
    if (!marketData || marketData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No market data found",
      });
    }

    for (const marketDatum of marketData) {
      // Safely extract values
      const high = parseFloat(marketDatum.highestPrice || 0); // Default to 0 if undefined
      const open = parseFloat(marketDatum.openPrice || 0);

      if (isNaN(high) || isNaN(open)) {
        console.warn(
          `Invalid data for ${formattedDate}: High=${high}, Open=${open}`
        );
        continue; // Skip iteration if data is invalid
      }

      const difference = high - open;
      sum += difference;
      console.log(`High: ${high} | Open: ${open} | Diff: ${difference}`);
    }

    averageHighRange = sum / marketData.length;

    // Save to Metrics table in MongoDB
    await Metrics.findOneAndUpdate(
      { metricName: "Average Daily High Range" }, // Search for existing record
      { value: averageHighRange }, // Update value
      { upsert: true, new: true } // Insert if not found, return updated document
    );

    res.status(200).json({
      success: true,
      message: "Fetch successful & metric saved",
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

    const marketData = await MarketData.find().sort({ date: -1 }); // Sort by latest date first
    console.log(marketData.length);
    if (!marketData || marketData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No market data found",
      });
    }

    for (const marketDatum of marketData) {
      // Safely extract values
      const low = parseFloat(marketDatum.lowestPrice || 0); // Default to 0 if undefined
      const open = parseFloat(marketDatum.openPrice || 0);

      if (isNaN(low) || isNaN(open)) {
        console.warn(
          `Invalid data for ${formattedDate}: Low=${low}, Open=${open}`
        );
        continue; // Skip iteration if data is invalid
      }

      const difference = open - low;
      sum += difference;
      console.log(`Low: ${low} | Open: ${open} | Diff: ${difference}`);
    }

    averageLowRange = sum / marketData.length;

    // Save to Metrics table in MongoDB
    await Metrics.findOneAndUpdate(
      { metricName: "Average Daily Low Range" }, // Search for existing record
      { value: averageLowRange }, // Update value
      { upsert: true, new: true } // Insert if not found, return updated document
    );

    res.status(200).json({
      success: true,
      message: "Fetch successful & metric saved",
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

    const marketData = await MarketData.find().sort({ date: -1 }); // Sort by latest date first
    console.log(marketData.length);
    if (!marketData || marketData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No market data found",
      });
    }

    for (const marketDatum of marketData) {
      // Safely extract values
      const low = parseFloat(marketDatum.lowestPrice || 0); // Default to 0 if undefined
      const high = parseFloat(marketDatum.highestPrice || 0);

      if (isNaN(low) || isNaN(high)) {
        console.warn(
          `Invalid data for ${formattedDate}: Low=${low}, High=${high}`
        );
        continue; // Skip iteration if data is invalid
      }

      const difference = high - low;
      sum += difference;
      console.log(`Low: ${low} |  High: ${high} | Diff: ${difference}`);
    }

    averageTotalRange = sum / marketData.length;

    // Save to Metrics table in MongoDB
    await Metrics.findOneAndUpdate(
      { metricName: "Average Daily Total Range" }, // Search for existing record
      { value: averageTotalRange }, // Update value
      { upsert: true, new: true } // Insert if not found, return updated document
    );

    res.status(200).json({
      success: true,
      message: "Fetch successful & metric saved",
      data: averageTotalRange,
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

// Function to calculate average daily volume range
const calculateAverageDailyVolumeRange = async (req, res) => {
  try {
    let sum = 0;
    let averageVolumeRange = 0;

    const marketData = await MarketData.find().sort({ date: -1 }); // Sort by latest date first
    console.log(marketData.length);
    if (!marketData || marketData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No market data found",
      });
    }

    for (const marketDatum of marketData) {
      // Safely extract values
      const close = parseFloat(marketDatum.closePrice || 0); // Default to 0 if undefined
      const open = parseFloat(marketDatum.openPrice || 0);

      if (isNaN(close) || isNaN(open)) {
        console.warn(
          `Invalid data for ${formattedDate}: Close=${close}, Open=${open}`
        );
        continue; // Skip iteration if data is invalid
      }

      const difference = Math.abs(open - close);
      sum += difference;
      console.log(`Close: ${close} | Open: ${open} | Diff: ${difference}`);
    }

    averageVolumeRange = sum / marketData.length;

    // Save to Metrics table in MongoDB
    await Metrics.findOneAndUpdate(
      { metricName: "Average Daily Volume Range" }, // Search for existing record
      { value: averageVolumeRange }, // Update value
      { upsert: true, new: true } // Insert if not found, return updated document
    );

    res.status(200).json({
      success: true,
      message: "Fetch successful & metric saved",
      data: averageVolumeRange,
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

const getAllMetrics = async (req, res) => {
  try {
    const metricsData = await Metrics.find({});

    if (!metricsData || metricsData.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Metrics data found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Metrics data retrieved successfully",
      data: metricsData,
    });
  } catch (error) {
    console.error("Error retrieving metrics data:", error.message);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {
  calculateAverageDailyHighRange,
  calculateAverageDailyLowRange,
  calculateAverageDailyTotalRange,
  calculateAverageDailyVolumeRange,
  getAllMetrics,
};
