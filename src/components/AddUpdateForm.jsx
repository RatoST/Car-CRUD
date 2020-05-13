import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({
  car, handleInputChange }) => {

  return (
    <div className="flex-container">
      <Field
        fName="Brand"
        minLength="2"
        maxLength="20"
        name="brand"
        onChange={handleInputChange}
        type="text"
        value={car.brand}
      />
      <Field
        fName="Country"
        minLength="2"
        maxLength="20"
        name="country"
        onChange={handleInputChange}
        type="text"
        value={car.country}
      />
      <Field
        fName="Model"
        name="model"
        minLength="1"
        maxLength="20"
        onChange={handleInputChange}
        type="text"
        value={car.model}
      />
      <Field
        fName="Year"
        minLength="4"
        maxLength="5"
        name="year"
        onChange={handleInputChange}
        type="number"
        value={car.year}
      />
      <Field
        fName="Serial number"
        minLength="12"
        maxLength="13"
        name="serialNum"
        onChange={handleInputChange}
        type="number"
        value={car.serialNum}
      />
      <Field
        fName="Description"
        minLength="5"
        maxLength="30"
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
