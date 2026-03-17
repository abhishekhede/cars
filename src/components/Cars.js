import './cars.css'
import Vehicle from "./Vehicle";

const Cars = () => {
  const newCars = [
    { id: 1, name: "Tesla Model 3", year: 2024, price: 40000 },
    { id: 2, name: "Porsche Taycan", year: 2024, price: 90000 },
  ];

  const usedCars = [
    { id: 3, name: "Honda Civic", year: 2018, price: 15000 },
    { id: 4, name: "Toyota Corolla", year: 2015, price: 10000 },
  ];
 
  const renderCars=(props)=>{
    return props.map((car)=>(
        <Vehicle key={car.id} id={car.id} name={car.name} year={car.year} price={car.price}/>
    ))
  };

  return (
    <div className="cars-list">
      <div className="old-cars">
        <h2>Used</h2>
        {renderCars(usedCars)}
      </div>

      <div className="new-cars">
        <h2>New</h2>
        {renderCars(newCars)}
      </div>
    </div>
  );
};

export default Cars;
