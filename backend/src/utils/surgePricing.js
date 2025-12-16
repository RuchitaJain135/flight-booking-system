const surgeMap = new Map();

// function to calculate dynamic price
const getDynamicPrice = (flight) => {
  const now = Date.now();
  const flightId = flight.flight_id;

  if (!surgeMap.has(flightId)) {
    surgeMap.set(flightId, {
      count: 1,
      firstAttemptTime: now,
      price: flight.base_price,
    });
    return flight.base_price;
  }

  const data = surgeMap.get(flightId);

  const diffMinutes = (now - data.firstAttemptTime) / (1000 * 60);

  // reset after 10 minutes
  if (diffMinutes > 10) {
    surgeMap.set(flightId, {
      count: 1,
      firstAttemptTime: now,
      price: flight.base_price,
    });
    return flight.base_price;
  }

  data.count += 1;

  // surge rule
  if (data.count === 3 && diffMinutes <= 5) {
    data.price = Math.round(flight.base_price * 1.1);
  }

  surgeMap.set(flightId, data);
  return data.price;
};

module.exports = { getDynamicPrice };
