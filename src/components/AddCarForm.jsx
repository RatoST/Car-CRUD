import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCarForm = (props) => {
  const initialFormState = {
    id: null,
    brand: '',
    country: '',
    model: '',
    year: '',
    serialNum: '',
    description: '',
  };

  const [car, setCar] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!car.brand || !car.country) return;
        props.addCar(car);
        setCar(initialFormState);
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
      <button type="submit" className="button add-button">Add new car</button>
    </form>
  );
};

AddCarForm.propTypes = {
  addCar: PropTypes.func.isRequired,
};

export default AddCarForm;
