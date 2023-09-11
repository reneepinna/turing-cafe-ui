export function getReservations() {
  return fetch('http://localhost:3001/api/v1/reservations').then(res =>
    res.json(),
  );
}

export function postReservation({ name, date, time, number }) {
  const newRes = { name, date, time, number: Number(number) };

  return fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newRes),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }

      return res.json();
    })
    .catch(error => console.log(error));
}
