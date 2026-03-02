import { Link } from 'react-router-dom';

const Vehicle = ({ id, name, year, price }) => {
  return (
    <Link to={`/details/${id}`} className="vehicle-link">
      <div className="vehicle-container">
        <h3>{name}</h3>
        <p>{year} — ${price}</p>
      </div>
    </Link>
  );
};

export default Vehicle;