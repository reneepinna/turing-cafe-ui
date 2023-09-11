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
  const [formError, setFormError] = useState('');

  function validate({ name, date, time, number }) {
    if (![name, date, time, number].every(input => input)) {
      setFormError('All inputs are required.')
      return false;
    }

    return true;
  }

  function onChange(e) {
    e.persist();
    setForm(prev => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  }

  function submitReservation(e) {
    e.preventDefault();

    if (validate(form)) {
      postReservation(form).then(data =>
        setReservations(prev => [...prev, data]),
      );
      setForm({ name: '', date: '', time: '', number: '' });
    }
  }

  return (
    <div className='reservationForm'>
      <p className='formNotice'>{formError ? formError : 'Make a reservation!'}</p>
      <form>
        <input
          id='name'
          type='text'
          value={form.name}
          placeholder='Name'
          onChange={e => onChange(e)}
          required
        />
        <input
          id='date'
          type='text'
          value={form.date}
          placeholder='Date(mm/dd)'
          onChange={e => onChange(e)}
          required
        />
        <input
          id='time'
          type='text'
          value={form.time}
          placeholder='Time'
          onChange={e => onChange(e)}
          required
        />
        <input
          id='number'
          type='text'
          value={form.number}
          placeholder='Number of guests'
          onChange={e => onChange(e)}
          required
        />
        <input
          type='submit'
          value='Make Reservation'
          onClick={e => submitReservation(e)}
        />
      </form>
    </div>
  );
}

export default ReservationForm;
