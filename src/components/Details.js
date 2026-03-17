import { useParams, useNavigate , useLocation} from 'react-router-dom';
import './details.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  
  const total = useSelector((store) => store.total.total)
  
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { name, price } = location.state || {};

    React.useEffect(() => {
      if (!id) {
        navigate('/');
      }
    },[id, navigate]);

  return (
    <div className="details-page">
      <h1>Total : {total}</h1>

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