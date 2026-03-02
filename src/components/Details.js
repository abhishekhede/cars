import { useParams, useNavigate , useLocation} from 'react-router-dom';
import './details.css';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, price } = location.state || {};

  return (
    <div className="details-page">
      <div className="details-card">
        <h1>Car Details</h1>
        <p>
          Currently viewing information for 
          <strong> Vehicle ID: {id} </strong>
          named <strong>{name}</strong> priced at <strong>${price}</strong>.
        </p>
        
        <button className="back-button" onClick={() => navigate(-1)}>
          &larr; Go Back
        </button>
      </div>
    </div>
  );
};

export default Details;