import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import carsData from './components/carsData';
import CarTable from './components/CarTable';
import AddCarForm from './components/AddCarForm';
import EditCarForm from './components/EditCarForm';
import Footer from './components/Footer';


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
  const [editing, setEditing] = useState(false);

  const addCar = (car) => {
    const newCar = { ...car, id: addId() };
    setCars([...cars, newCar]);
  };

  const deleteCar = (id) => {
    setEditing(false);
    setCars(cars.filter((car) => car.id !== id));
  };

  const editRow = (car) => {
    setEditing(true);
    setCurrentCar(car);
  };

  const updateNewCar = (id, updateCar) => {
    setEditing(false);
    setCars(cars.map((car) => (car.id === id ? updateCar : car)));
  };

  return (
    <div className="container">
      <h1>CRUD App Cars</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View cars</h2>
          <CarTable
            cars={cars}
            editing={editing}
            editRow={editRow}
            deleteCar={deleteCar}
            currentCarSerNum={currentCar.serialNum}
          />
        </div>
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit car</h2>
              <EditCarForm
                setEditing={setEditing}
                currentCar={currentCar}
                updateCar={updateNewCar}
              />
            </div>
          ) : (
            <div>
              <h2>Add cars</h2>
              <AddCarForm
                initialFormState={initialFormState}
                addCar={addCar}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default App;
