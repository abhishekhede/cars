import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="details-page">
      <h1>Car Details</h1>
      <p>Displaying information for Car ID: <strong>{id}</strong></p>
      
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Details;