const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight_id: {
    type: String,
    required: true,
    unique: true,
  },
  airline: {
    type: String,
    required: true,
  },
  departure_city: {
    type: String,
    required: true,
  },
  arrival_city: {
    type: String,
    required: true,
  },
  base_price: {
    type: Number,
    required: true,
    min: 2000,
    max: 3000,
  },
});

module.exports = mongoose.model("Flight", flightSchema);
