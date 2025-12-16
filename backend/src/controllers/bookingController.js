const Flight = require("../models/Flight");
const Booking = require("../models/Booking");
const { getDynamicPrice } = require("../utils/surgePricing");
const { getWalletBalance, deductFromWallet } = require("../utils/wallet");
const { generateTicketPDF } = require("../utils/ticketGenerator");

exports.bookFlight = async (req, res) => {
  try {
    const { flight_id } = req.body;

    const flight = await Flight.findOne({ flight_id });
    if (!flight) {
      return res.status(404).json({ message: "Flight not found" });
    }

    const finalPrice = getDynamicPrice(flight);

    // 💰 WALLET CHECK & DEDUCT
    const success = deductFromWallet(finalPrice);
    if (!success) {
      return res.status(400).json({
        success: false,
        message: "Insufficient wallet balance",
        wallet_balance: getWalletBalance(),
      });
    }

    // PNR & BOOKING TIME
    const pnr = "PNR" + Math.floor(100000 + Math.random() * 900000);
    const bookingTime = new Date().toLocaleString();

    //  GENERATE PDF TICKET
    generateTicketPDF({
      passengerName: "Ruchi Jain",
      flight_id: flight.flight_id,
      airline: flight.airline,
      route: `${flight.departure_city} → ${flight.arrival_city}`,
      final_price: finalPrice,
      pnr,
      bookingTime,
    });
    // SAVE BOOKING TO DB
await Booking.create({
  passengerName: "Ruchi Jain",
  flight_id: flight.flight_id,
  airline: flight.airline,
  route: `${flight.departure_city} → ${flight.arrival_city}`,
  final_price: finalPrice,
  pnr,
  bookingTime,
  ticketPath: `/tickets/ticket_${pnr}.pdf`,
});

    //  FINAL RESPONSE
    res.status(200).json({
      success: true,
      flight_id: flight.flight_id,
      airline: flight.airline,
      route: `${flight.departure_city} → ${flight.arrival_city}`,
      final_price: finalPrice,
      wallet_balance: getWalletBalance(),
      pnr,
      ticket_download: `/tickets/ticket_${pnr}.pdf`,
    });
  } catch (error) {
    res.status(500).json({ message: "Booking failed" });
  }
};
