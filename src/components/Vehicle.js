import React from 'react';

const Vehicle = ({ name, year, price }) => (
  <div className='vehicle-container'>
    <h3>{name} ({year})</h3>
    <p>${price}</p>
  </div>
);

export default Vehicle;