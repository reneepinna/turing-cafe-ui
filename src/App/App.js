import ReservationContainer from '../ReservationContainer/ReservationContainer';
import ReservationForm from '../ReservationForm/ReservationForm';
import { getReservations } from '../apiCalls';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [reservations, setReservations] = useState([])


  useEffect(() => {
    getReservations()
      .then(data => setReservations(data))
  }, [])

  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <ReservationForm setReservations={setReservations}/>
      <ReservationContainer reservations={reservations}/>
    </div>
  );
}

export default App;
