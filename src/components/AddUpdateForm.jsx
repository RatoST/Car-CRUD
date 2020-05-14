import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({
  car, handleInputChange }) => {

  return (
    <div className="flex-container">
      <Field
        fName="Brand"
        name="brand"
        onChange={handleInputChange}
        type="text"
        value={car.brand}
      />
      <Field
        fName="Country"
        name="country"
        onChange={handleInputChange}
        type="text"
        value={car.country}
      />
      <Field
        fName="Model"
        name="model"
        onChange={handleInputChange}
        type="text"
        value={car.model}
      />
      <Field
        fName="Year"
        min="4"
        name="year"
        onChange={handleInputChange}
        type="number"
        value={car.year}
      />
      <Field
        fName="Serial number"
        min="12"
        name="serialNum"
        onChange={handleInputChange}
        type="number"
        value={car.serialNum}
      />
      <Field
        fName="Description"
        name="description"
        onChange={handleInputChange}
        type="text"
        value={car.description}
      />
    </div>
  );
};

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
