const express = require("express");
const router = express.Router();

const {
  fetchKimberaData,
  fetchAllKimberaData,
} = require("../controllers/marketData");

router.route("/fetchKimberaData").post(fetchKimberaData);
router.route("/getAllKimberaData").get(fetchAllKimberaData);

module.exports = router;
