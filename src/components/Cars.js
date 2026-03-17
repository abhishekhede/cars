import './cars.css'
import Vehicle from "./Vehicle";
import { useSelector, useDispatch } from "react-redux";
import { setTotal } from "../utils/totalSlice";
import { useEffect } from 'react';

const Cars = () => {
  const total = useSelector((store) => store.total.total);
  const dispatch = useDispatch();

  const newCars = [
    { id: 1, name: "Tesla Model 3", year: 2024, price: 40000 },
    { id: 2, name: "Porsche Taycan", year: 2024, price: 90000 },
    { id: 5, name: "Maruti", year: 2024, price: 90000 }
  ];

  const usedCars = [
    { id: 3, name: "Honda Civic", year: 2018, price: 15000 },
    { id: 4, name: "Toyota Corolla", year: 2015, price: 10000 },
  ];

  useEffect(() => {
    dispatch(setTotal(newCars.length + usedCars.length));
  }, [dispatch, newCars.length, usedCars.length]);
 
  const renderCars=(props)=>{
    return props.map((car)=>(
        <Vehicle key={car.id} id={car.id} name={car.name} year={car.year} price={car.price}/>
    ))
  };

  return (
    <div className="cars-list">

      <h1>Total : {total}</h1>

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