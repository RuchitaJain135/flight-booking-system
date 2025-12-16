const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const generateTicketPDF = (bookingDetails) => {
  const {
    passengerName,
    flight_id,
    airline,
    route,
    final_price,
    pnr,
    bookingTime,
  } = bookingDetails;

  const ticketsDir = path.join(__dirname, "../../tickets");
  if (!fs.existsSync(ticketsDir)) {
    fs.mkdirSync(ticketsDir);
  }

  const filePath = path.join(ticketsDir, `ticket_${pnr}.pdf`);
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(22).text("Flight Ticket", { align: "center" });

  doc.moveDown();

  doc.fontSize(12).text(`Passenger Name: ${passengerName}`);
  doc.text(`PNR: ${pnr}`);
  doc.text(`Airline: ${airline}`);
  doc.text(`Flight ID: ${flight_id}`);
  doc.text(`Route: ${route}`);
  doc.text(`Final Price Paid: ₹${final_price}`);
  doc.text(`Booking Time: ${bookingTime}`);

  doc.end();

  return filePath;
};

module.exports = { generateTicketPDF };
