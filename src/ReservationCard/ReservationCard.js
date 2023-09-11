import './ReservationCard.css';

function ReservationCard({ reservation }) {
  const { id, name, date, time, number } = reservation;

  return (
    <article className='reservationCard'>
      <h3 className='card-name'>{name}</h3>
      <p className='card-text'>{date}</p>
      <p className='card-text'>{time}</p>
      <p className='card-text'>{number}</p>
    </article>
  );
}

export default ReservationCard;
