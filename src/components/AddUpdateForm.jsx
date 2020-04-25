import React from 'react';
import PropTypes from 'prop-types';


const AddUpdateForm = ({ car, handleInputChange }) => (
  <>
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
  </>
);

AddUpdateForm.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  handleInputChange: PropTypes.func,
};

export default AddUpdateForm;
