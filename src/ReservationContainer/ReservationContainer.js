import { useEffect, useState } from 'react'
import './ReservationContainer.css'
import { getReservations } from '../apiCalls'
import ReservationCard from '../ReservationCard/ReservationCard'

function ReservationContainer() {
  const [reservations, setReservations] = useState([])

  useEffect(() => {
    getReservations()
      .then(data => setReservations(data))
  }, [])

  const cards = reservations.map(reservation => <ReservationCard reservation={reservation} key={reservation.id}/>)

  return <div className='reservationContainer'>
    {cards}
  </div>
}

export default ReservationContainer