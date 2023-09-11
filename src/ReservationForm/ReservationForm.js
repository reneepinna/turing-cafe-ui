import { useEffect, useState } from 'react';
import './ReservationForm.css';
import { postReservation } from '../apiCalls';

function ReservationForm({ setReservations }) {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    number: '',
  });

  function onChange(e) {
    e.persist();
    setForm(prev => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  }

  function submitReservation(e) {
    e.preventDefault();
    postReservation(form).then(data =>  setReservations(prev => [...prev, data]) )
   
    setForm({ name: '', date: '', time: '', number: '' });
  }

  return (
    <form>
      <input
        id='name'
        type='text'
        value={form.name}
        placeholder='Name'
        onChange={e => onChange(e)}
      />
      <input
        id='date'
        type='text'
        value={form.date}
        placeholder='Date(mm/dd)'
        onChange={e => onChange(e)}
      />
      <input
        id='time'
        type='text'
        value={form.time}
        placeholder='Time'
        onChange={e => onChange(e)}
      />
      <input
        id='number'
        type='text'
        value={form.number}
        placeholder='Number of guests'
        onChange={e => onChange(e)}
      />
      <input
        type='submit'
        value='Make Reservation'
        onClick={e => submitReservation(e)}
      />
    </form>
  );
}

export default ReservationForm;
