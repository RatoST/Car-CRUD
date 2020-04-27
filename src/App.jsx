import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import carsData from './components/carsData';
import CarTable from './components/CarTable';
import AddCarForm from './components/AddCarForm';
import UpdateCarForm from './components/UpdateCarForm';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';


const App = () => {
  const initialFormState = {
    id: '',
    brand: '',
    country: '',
    model: '',
    year: '',
    serialNum: '',
    description: '',
  };

  const addId = (obj) => ({ ...obj, id: uuidv4() });
  const addIds = (obj) => obj.map(addId);

  const [cars, setCars] = useState(addIds(carsData));
  const [currentCar, setCurrentCar] = useState(initialFormState);
  const [updating, setUpdating] = useState(false);
  const [adding, setAdding] = useState(false);

  const addCar = (car) => {
    setCars([...cars, addId(car)]);
  };

  const deleteCar = (id) => {
    setUpdating(false);
    setCars(cars.filter((car) => car.id !== id));
  };

  const updateRow = (car) => {
    setUpdating(true);
    setCurrentCar(car);
    setAdding(false);
  };

  const updateExistCar = (updateCar) => {
    setUpdating(false);
    setCars(cars.map((car) => (car.id === updateCar.id ? updateCar : car)));
  };

  const addingCar = () => {
    setAdding(true);
    setUpdating(false);
  };

  const clickHandle = (car) => {
    addingCar(car);
  };

  const keyDownHandle = (car) => {
    addingCar(car);
  };

  return (
    <div className="container">
      <h1>CRUD App Cars</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View cars</h2>
          <SearchBar
            cars={cars}
          />
          <CarTable
            cars={cars}
            updating={updating}
            updateRow={updateRow}
            deleteCar={deleteCar}
            currentCarSerNum={currentCar.serialNum}
          />
        </div>
        <div className="flex-large">
          {updating && (
            <div>
              <h2>Edit car</h2>
              <UpdateCarForm
                setUpdating={setUpdating}
                currentCar={currentCar}
                updateCar={updateExistCar}
              />
            </div>
          )}
          {adding && (
            <div>
              <h2>Add cars</h2>
              <AddCarForm
                initialFormState={initialFormState}
                addCar={addCar}
                setAdding={setAdding}
              />
            </div>
          )}
        </div>
        {!adding && (!updating && (
          <button
            type="submit"
            className="button add-button new-button"
            onClick={clickHandle}
            onKeyDown={keyDownHandle}
            role="presentation"
          >
            Add new car
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default App;
