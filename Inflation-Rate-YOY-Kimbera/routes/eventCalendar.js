const express = require("express");
const router = express.Router();

const {
  fetchAllEventCalendar,
  fetchInflationRateData,
} = require("../controllers/eventCalendar");

router.route("/getAllEventCalendar").get(fetchAllEventCalendar);
router.route("/fetchInflationRateData").post(fetchInflationRateData);

module.exports = router;
