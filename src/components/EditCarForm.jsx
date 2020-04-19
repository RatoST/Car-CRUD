import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EditCarForm = ({
  currentCar, updateCar, setEditing, setPencil,
}) => {
  const [car, setCar] = useState(currentCar);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  useEffect(() => {
    setCar(currentCar);
  }, [currentCar]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateCar(car.id, car);
      }}
    >
      <label>
        Brand
        <input
          type="text"
          name="brand"
          value={car.brand}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Country
        <input
          type="text"
          name="country"
          value={car.country}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Model
        <input
          type="text"
          name="model"
          value={car.model}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Year
        <input
          type="text"
          name="year"
          value={car.year}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Serial Number
        <input
          type="text"
          name="serialNum"
          value={car.serialNum}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Description
        <input
          type="text"
          name="description"
          value={car.description}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="button add-button">Update car</button>
      <button
        type="submit"
        onClick={() => {
          setEditing(false);
          setPencil(false);
        }}
        className="button cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};


EditCarForm.propTypes = {
  currentCar: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  updateCar: PropTypes.func,
  setEditing: PropTypes.func,
  setPencil: PropTypes.func,
};

export default EditCarForm;
