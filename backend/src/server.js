require("dotenv").config({ path: "../.env" });
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const historyRoutes = require("./routes/historyRoutes");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path"); 

const app = express();
app.use(cors());
app.use(express.json());
app.use("/tickets", express.static(path.join(__dirname, "../tickets")));


app.use("/api", flightRoutes);
app.use("/api", bookingRoutes);
app.use("/api", historyRoutes);


// 🔥 DIRECT CONNECTION STRING (TEMP)
const MONGO_URI =
  "mongodb+srv://admin:admin123@flight-booking-cluster.c0ojcdl.mongodb.net/flightDB?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully ✅"))
  .catch((err) => console.error("MongoDB Connection Error ❌", err));

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
