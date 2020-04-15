import React, { useState } from 'react';
import carsData from './components/carsData';
import CarTable from './components/CarTable';
import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm';
import Footer from './components/Footer';

const App = () => {
  const [cars, setCars] = useState(carsData);
  const [editing, setEditing] = useState(false);

  const addCar = (car) => {
    const carTwo = car;
    carTwo.id = cars.length + 1;
    setCars([...cars, car]);
  };

  const deleteCar = (id) => {
    setEditing(false);
    setCars(cars.filter((car) => car.id !== id));
  };

  const initialFormState = {
    id: null,
    brand: '',
    country: '',
    model: '',
    year: '',
    serialNum: '',
    description: '',
  };

  const [currentCar, setCurrentCar] = useState(initialFormState);

  const editRow = (car) => {
    setEditing(true);
    setCurrentCar({
      id: car.id,
      brand: car.brand,
      country: car.country,
      model: car.model,
      year: car.year,
      serialNum: car.serialNum,
      description: car.description,
    });
  };

  const updateCarTwo = (id, updateCar) => {
    setEditing(false);
    setCars(cars.map((car) => (car.id === id ? updateCar : car)));
  };

  return (
    <div className="container">
      <h1>CRUD App Cars</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View cars</h2>
          <CarTable cars={cars} editRow={editRow} deleteCar={deleteCar} />
        </div>
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit car</h2>
              <EditCarForm
                setEditing={setEditing}
                currentCar={currentCar}
                updateCar={updateCarTwo}
              />
            </div>
          ) : (
            <div>
              <h2>Add cars</h2>
              <AddCarForm addCar={addCar} />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
