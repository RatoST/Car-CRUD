import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const EditCarForm = ({ currentCar, updateCar, setEditing }, props) => {
  const [car, setCar] = useState(currentCar);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  useEffect(() => {
    setCar(currentCar);
  }, [props]);

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
          type="number"
          name="year"
          value={car.year}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Serial Number
        <input
          type="number"
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
        onClick={() => setEditing(false)}
        className="button cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};

EditCarForm.propTypes = {
  currentCar: PropTypes.arrayOf.isRequired,
  updateCar: PropTypes.func.isRequired,
  setEditing: PropTypes.func.isRequired,
};

export default EditCarForm;
