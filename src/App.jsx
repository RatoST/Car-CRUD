import React, { useState, useMemo } from 'react';
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
  const [searchText, setSearchText] = useState('');

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

  const filteredCars = cars.filter((car) =>
    (car.brand.toLowerCase().includes(searchText.toLowerCase()))
    || (car.model.toLowerCase().includes(searchText.toLowerCase()))
    || (car.country.toLowerCase().includes(searchText.toLowerCase()))
    || (car.description.toLowerCase().includes(searchText.toLowerCase())));


  // recycled code from line 72 to 104.
  const useSortableData = (config = null) => {
    const [sortConfig, setSortConfig] = useState(config);

    const sortedItems = useMemo(() => {
      const sortableItems = [...filteredCars];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [sortConfig]);

    const requestSort = (key) => {
      let direction = 'ascending';
      if (
        sortConfig
          && sortConfig.key === key
          && sortConfig.direction === 'ascending'
      ) {
        direction = 'descending';
      }
      setSortConfig({ key, direction });
    };

    return { filteredCars: sortedItems, requestSort, sortConfig };
  };

  return (
    <div className="container">
      <h1>CRUD App Cars</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View cars</h2>
          <SearchBar
            filteredCars={filteredCars}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CarTable
            currentCarSerNum={currentCar.serialNum}
            deleteCar={deleteCar}
            filteredCars={filteredCars}
            updating={updating}
            updateRow={updateRow}
            useSortableData={useSortableData}
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
