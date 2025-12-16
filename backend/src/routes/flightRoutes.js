const express = require("express");
const router = express.Router();
const { getAllFlights } = require("../controllers/flightController");

// GET /api/flights
router.get("/flights", getAllFlights);

module.exports = router;
