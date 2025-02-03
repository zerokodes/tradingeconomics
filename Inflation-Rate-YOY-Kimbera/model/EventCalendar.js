const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const EventCalendarSchema = new mongoose.Schema(
  {
    date: { type: String, required: [true, "Please input date"], unique: true },
    event: { type: String, required: [true, "Please input event"] },
    actual: { type: String, required: [true, "Please input actual value"] },
    forecast: { type: String, required: [true, "Please input forecast value"] },
    previous: { type: String, required: [true, "Please input previous value"] },
  },
  { timestamps: false }
);

module.exports = mongoose.model("EventCalendar", EventCalendarSchema);
