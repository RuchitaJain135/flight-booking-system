const express = require("express");
const router = express.Router();
const { bookFlight } = require("../controllers/bookingController");

router.post("/book", bookFlight);

module.exports = router;
