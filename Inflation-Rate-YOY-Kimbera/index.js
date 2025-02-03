const express = require("express");
const metricsRoute = require("./routes/metrics");
const eventCalendarRoute = require("./routes/eventCalendar");
const marketDataRoute = require("./routes/marketData");
const app = express();
const cors = require("cors");
const connectDB = require("./database/connect");

require("dotenv").config();

/**app.use(cors({
  origin: '*'
}))**/
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 2000;

app.use("/api/v1/metrics", metricsRoute);
app.use("/api/v1/eventCalendars", eventCalendarRoute);
app.use("/api/v1/marketData", marketDataRoute);

const MONGO_URI = process.env.MONGO_URI;

// Start the server
const start = async () => {
  try {
    await connectDB(MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listen on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
