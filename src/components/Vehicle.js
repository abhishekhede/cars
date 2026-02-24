import React from 'react';

const Vehicle = ({ name, year, price }) => (
  <div style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
    <h3>{name} ({year})</h3>
    <p>${price}</p>
  </div>
);

export default Vehicle;