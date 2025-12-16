const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    passengerName: { type: String, required: true },
    flight_id: { type: String, required: true },
    airline: { type: String, required: true },
    route: { type: String, required: true },
    final_price: { type: Number, required: true },
    pnr: { type: String, required: true, unique: true },
    bookingTime: { type: String, required: true },
    ticketPath: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
