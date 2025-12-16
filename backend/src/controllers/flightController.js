const Flight = require("../models/Flight");

// GET flights with optional search
exports.getAllFlights = async (req, res) => {
  try {
    const { from, to } = req.query;

    let query = {};

    if (from) {
      query.departure_city = from;
    }

    if (to) {
      query.arrival_city = to;
    }

    const flights = await Flight.find(query).limit(10);

    res.status(200).json({
      success: true,
      count: flights.length,
      data: flights,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching flights",
    });
  }
};
