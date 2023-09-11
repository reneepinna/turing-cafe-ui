import ReservationContainer from '../ReservationContainer/ReservationContainer';
import { getReservations } from '../apiCalls';
import './App.css';
import React from 'react';

function App() {


  return (
    <div className='App'>
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <ReservationContainer />
      <div className='resy-container'></div>
    </div>
  );
}

export default App;
