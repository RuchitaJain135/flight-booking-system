const express = require("express");
const router = express.Router();
const { getBookingHistory } = require("../controllers/historyController");

router.get("/history", getBookingHistory);

module.exports = router;
