const Booking = require("../models/Booking");

exports.getBookingHistory = async (req, res) => {
  try {
    const history = await Booking.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: history.length,
      data: history,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch history" });
  }
};

