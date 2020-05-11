import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddCarForm from './components/AddCarForm';
import carsData from './components/carsData';
import CarTable from './components/CarTable';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import UpdateCarForm from './components/UpdateCarForm';

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

  const addId = obj => {
    const uid = uuidv4();
    const ret = { ...obj };
    ret.id = uid;
    return ret;
  };
  const addIds = (arr) => arr.map(addId);

  const [adding, setAdding] = useState(false);
  const [cars, setCars] = useState(addIds(carsData));
  const [currentCar, setCurrentCar] = useState(initialFormState);
  const [searchText, setSearchText] = useState('');
  const [updating, setUpdating] = useState(false);
  const [validateState, setValidateState] = useState(false);
  const [validateExe, setValidateExe] = useState(false);

  const addCar = car => {
    const newCar = addId(car);
    const newState = [...cars, newCar];
    setCars(newState);
    setValidateState(false);
  };

  const deleteCar = (id) => {
    setUpdating(false);
    const filterCars = cars.filter((car) => car.id !== id);
    setCars(filterCars);
  };

  const updateRow = (car) => {
    setUpdating(true);
    setCurrentCar(car);
    setAdding(false);
  };

  const updateExistCar = (updateCar) => {
    setUpdating(false);
    const mapCars = cars.map((car) => (car.id === updateCar.id ? updateCar : car));
    setCars(mapCars);
    setValidateState(false);
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

  const filteredCars = cars.filter((car) =>
    (car.brand.toLowerCase().includes(searchText.toLowerCase()))
  || (car.model.toLowerCase().includes(searchText.toLowerCase()))
  || (car.country.toLowerCase().includes(searchText.toLowerCase()))
  || (car.year.toLowerCase().includes(searchText.toLowerCase()))
  || (car.description.toLowerCase().includes(searchText.toLowerCase())));

  return (
    <div className="container">
      <h1>CRUD App Cars</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View cars</h2>
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CarTable
            cars={filteredCars}
            currentCarSerNum={currentCar.serialNum}
            deleteCar={deleteCar}
            updating={updating}
            updateRow={updateRow}
          />
        </div>
        <div className="flex-container flex-large">
          {updating && (
            <div>
              <h2>Edit car</h2>
              <UpdateCarForm
                currentCar={currentCar}
                setUpdating={setUpdating}
                updateCar={updateExistCar}
                validateState={validateState}
                setValidateState={setValidateState}
                validateExe={validateExe}
              />
            </div>
          )}
          {adding && (
            <div>
              <h2>Add cars</h2>
              <AddCarForm
                addCar={addCar}
                initialFormState={initialFormState}
                setAdding={setAdding}
                validateState={validateState}
                setValidateState={setValidateState}
                validateExe={validateExe}
                setValidateExe={setValidateExe}
              />
            </div>
          )}
        </div>
        {!adding && (!updating && (
          <button
            className="button add-button new-button"
            onClick={clickHandle}
            onKeyDown={keyDownHandle}
            role="presentation"
            type="submit"
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
