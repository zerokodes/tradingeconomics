const express = require("express");
const router = express.Router();

const {
  calculateAverageDailyHighRange,
  calculateAverageDailyLowRange,
  calculateAverageDailyTotalRange,
  calculateAverageDailyVolumeRange,
  getAllMetrics,
} = require("../controllers/metrics");

router.route("/getAverageDailyHighRange").get(calculateAverageDailyHighRange);
router.route("/getAverageDailyLowRange").get(calculateAverageDailyLowRange);
router.route("/getAverageDailyTotalRange").get(calculateAverageDailyTotalRange);
router.route("/getAllMetrics").get(getAllMetrics);
router
  .route("/getAverageDailyVolumeRange")
  .get(calculateAverageDailyVolumeRange);

module.exports = router;
