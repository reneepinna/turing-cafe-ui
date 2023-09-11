import ReservationContainer from '../ReservationContainer/ReservationContainer';
import ReservationForm from '../ReservationForm/ReservationForm';
import { getReservations } from '../apiCalls';
import './App.css';
import React from 'react';

function App() {


  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <ReservationForm />
      <ReservationContainer />
    </div>
  );
}

export default App;
