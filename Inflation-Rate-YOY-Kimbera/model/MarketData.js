const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MarketDataSchema = new mongoose.Schema(
  {
    symbol: { type: String, required: [true, "Please input symbol"] },
    date: { type: String, required: [true, "Please input date"], unique: true },
    openPrice: {
      type: String,
      required: [true, "Please input open price value"],
    },
    highestPrice: {
      type: String,
      required: [true, "Please input hightest price value"],
    },
    lowestPrice: {
      type: String,
      required: [true, "Please input lowest price value"],
    },
    closePrice: {
      type: String,
      required: [true, "Please input close price value"],
    },
  },
  { timestamps: false }
);

module.exports = mongoose.model("MarketData", MarketDataSchema);
