# ✈ Flight Booking System – Full Stack Assignment

This project is an end-to-end **Flight Booking System** built as part of the **XTechon – Full Stack Developer Technical Assignment**.  
It demonstrates backend-driven flight search, dynamic pricing, wallet handling, PDF ticket generation, booking history, and a simple frontend UI.

---

## 🚀 Features Implemented

### ✅ Flight Search (Database Driven)
- Flights are stored in **MongoDB**
- 10 flights seeded using a script
- Each flight contains:
  - `flight_id`
  - `airline`
  - `departure_city`
  - `arrival_city`
  - `base_price (₹2000–₹3000)`
- API always fetches flights directly from the database

---

### ✅ Dynamic Pricing Engine
- If the **same flight is booked 3 times within 5 minutes**, price increases by **10%**
- After **10 minutes**, price resets to the base price
- Implemented fully on the backend

---

### ✅ Wallet System
- Default wallet balance: **₹50,000**
- Final ticket price is deducted on booking
- If wallet balance is insufficient, a proper validation error is returned

---

### ✅ Ticket PDF Generation
- A **PDF ticket** is generated after every successful booking
- Ticket includes:
  - Passenger Name
  - Airline & Flight ID
  - Route (Departure → Arrival)
  - Final Price Paid
  - Booking Date & Time
  - Unique PNR
- PDF is downloadable and can be re-downloaded later

---

### ✅ Booking History
- Booking history is stored in **MongoDB (preferred approach)**
- History includes:
  - Flight details
  - Amount paid
  - Booking date
  - PNR
  - Ticket download link
- Exposed via REST API and displayed on frontend

---

### ✅ Frontend (Simple UI)
- Built using **HTML, CSS, and JavaScript**
- Pages:
  - Flight search & booking
  - Booking history with ticket download
- Clean card-based UI for better presentation

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### Frontend
- HTML
- CSS
- JavaScript

### Tools
- PDFKit (PDF generation)
- Thunder Client / Postman (API testing)

---

## 📁 Project Structure
# ✈ Flight Booking System – Full Stack Assignment

This project is an end-to-end **Flight Booking System** built as part of the **XTechon – Full Stack Developer Technical Assignment**.  
It demonstrates backend-driven flight search, dynamic pricing, wallet handling, PDF ticket generation, booking history, and a simple frontend UI.

---

## 🚀 Features Implemented

### ✅ Flight Search (Database Driven)
- Flights are stored in **MongoDB**
- 10 flights seeded using a script
- Each flight contains:
  - `flight_id`
  - `airline`
  - `departure_city`
  - `arrival_city`
  - `base_price (₹2000–₹3000)`
- API always fetches flights directly from the database

---

### ✅ Dynamic Pricing Engine
- If the **same flight is booked 3 times within 5 minutes**, price increases by **10%**
- After **10 minutes**, price resets to the base price
- Implemented fully on the backend

---

### ✅ Wallet System
- Default wallet balance: **₹50,000**
- Final ticket price is deducted on booking
- If wallet balance is insufficient, a proper validation error is returned

---

### ✅ Ticket PDF Generation
- A **PDF ticket** is generated after every successful booking
- Ticket includes:
  - Passenger Name
  - Airline & Flight ID
  - Route (Departure → Arrival)
  - Final Price Paid
  - Booking Date & Time
  - Unique PNR
- PDF is downloadable and can be re-downloaded later

---

### ✅ Booking History
- Booking history is stored in **MongoDB (preferred approach)**
- History includes:
  - Flight details
  - Amount paid
  - Booking date
  - PNR
  - Ticket download link
- Exposed via REST API and displayed on frontend

---

### ✅ Frontend (Simple UI)
- Built using **HTML, CSS, and JavaScript**
- Pages:
  - Flight search & booking
  - Booking history with ticket download
- Clean card-based UI for better presentation

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### Frontend
- HTML
- CSS
- JavaScript

### Tools
- PDFKit (PDF generation)
- Thunder Client / Postman (API testing)

---

## 📁 Project Structure
flight-booking-system/
├── backend/
│ ├── src/
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── server.js
│ └── tickets/
├── frontend/
│ ├── index.html
│ ├── history.html
│ ├── style.css
│ └── script.js
└── README.md

## How to Run the Project

### Backend
```bash
cd backend
npm install
npm run dev

Backend will run on:

http://localhost:5000

Seed Flights (one time)
node src/seedFlights.js

Frontend

Open frontend/index.html in the browser

Make sure backend is running

API Endpoints

Get Flights
GET /api/flights

Book Flight
POST /api/book
Body: { "flight_id": "AI101" }

Booking History
GET /api/history
