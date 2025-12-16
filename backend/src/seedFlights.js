const mongoose = require("mongoose");
const Flight = require("./models/Flight");

// 🔹 MongoDB connection (same DB)
mongoose.connect(
  "mongodb+srv://admin:admin123@flight-booking-cluster.c0ojcdl.mongodb.net/flightDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const flights = [
  { flight_id: "AI101", airline: "Air India", departure_city: "Mumbai", arrival_city: "Delhi", base_price: 2200 },
  { flight_id: "AI102", airline: "Air India", departure_city: "Delhi", arrival_city: "Mumbai", base_price: 2300 },
  { flight_id: "IND201", airline: "IndiGo", departure_city: "Pune", arrival_city: "Bangalore", base_price: 2100 },
  { flight_id: "IND202", airline: "IndiGo", departure_city: "Bangalore", arrival_city: "Pune", base_price: 2400 },
  { flight_id: "VST301", airline: "Vistara", departure_city: "Mumbai", arrival_city: "Chennai", base_price: 2500 },
  { flight_id: "VST302", airline: "Vistara", departure_city: "Chennai", arrival_city: "Mumbai", base_price: 2600 },
  { flight_id: "SP401", airline: "SpiceJet", departure_city: "Delhi", arrival_city: "Jaipur", base_price: 2000 },
  { flight_id: "SP402", airline: "SpiceJet", departure_city: "Jaipur", arrival_city: "Delhi", base_price: 2100 },
  { flight_id: "AK501", airline: "Akasa Air", departure_city: "Ahmedabad", arrival_city: "Mumbai", base_price: 2700 },
  { flight_id: "AK502", airline: "Akasa Air", departure_city: "Mumbai", arrival_city: "Ahmedabad", base_price: 2800 },
];

async function seedFlights() {
  try {
    await Flight.deleteMany(); // clean old data
    await Flight.insertMany(flights);
    console.log("✅ Flights seeded successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding flights:", error);
    process.exit(1);
  }
}

seedFlights();
