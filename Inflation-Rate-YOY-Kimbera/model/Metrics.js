const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const MetricsSchema = new mongoose.Schema(
  {
    metricName: {
      type: String,
      required: [true, "Please input metric name"],
      unique: true,
    },
    value: { type: String, required: [true, "Please input metric value"] },
  },
  { timestamps: false }
);

module.exports = mongoose.model("Metrics", MetricsSchema);
