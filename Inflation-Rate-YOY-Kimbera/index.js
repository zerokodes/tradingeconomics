const express = require("express");
const metricsRoute = require("./routes/metrics");
const app = express();

require("dotenv").config();

app.use(express.json());

const port = process.env.PORT || 2000;

app.use("/api/v1/metrics", metricsRoute);

// Start the server
const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listen on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
