const API_BASE = "http://localhost:5000/api";

function loadFlights() {
  fetch(`${API_BASE}/flights`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("flights");
      container.innerHTML = "";

      data.data.forEach(flight => {
        const div = document.createElement("div");
        div.className = "flight-card";
        div.innerHTML = `
          <strong>${flight.airline}</strong><br/>
          ${flight.departure_city} → ${flight.arrival_city}<br/>
          Price: ₹${flight.base_price}<br/>
          <button onclick="bookFlight('${flight.flight_id}')">Book</button>
        `;
        container.appendChild(div);
      });
    });
}

function bookFlight(flightId) {
  fetch(`${API_BASE}/book`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ flight_id: flightId }),
  })
    .then(res => res.json())
    .then(data => {
      alert(
        `Booked!\nPNR: ${data.pnr}\nFinal Price: ₹${data.final_price}`
      );
    });
}

function loadHistory() {
  fetch(`${API_BASE}/history`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("history");
      container.innerHTML = "";

      data.data.forEach(b => {
        const div = document.createElement("div");
        div.className = "flight-card";
        div.innerHTML = `
          <strong>${b.airline}</strong><br/>
          ${b.route}<br/>
          PNR: ${b.pnr}<br/>
          Amount Paid: ₹${b.final_price}<br/>
          Booking Time: ${b.bookingTime}<br/>
          <a href="http://localhost:5000${b.ticketPath}" target="_blank">
            <button>Download Ticket</button>
          </a>
        `;
        container.appendChild(div);
      });
    });
}
