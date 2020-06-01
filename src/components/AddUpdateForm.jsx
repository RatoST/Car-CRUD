import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({ car, checkErrors, fieldError, handleInputChange, setFieldError }) => (
  <div className="flex-container">
    <Field
      checkErrors={checkErrors}
      fName="Brand"
      fieldError={fieldError}
      maxLength={Number(15)}
      name="brand"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="text"
      value={car.brand}
    />
    <Field
      checkErrors={checkErrors}
      fName="Country"
      fieldError={fieldError}
      maxLength={Number(15)}
      name="country"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="text"
      value={car.country}
    />
    <Field
      checkErrors={checkErrors}
      fName="Model"
      fieldError={fieldError}
      maxLength={Number(15)}
      name="model"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="text"
      value={car.model}
    />
    <Field
      checkErrors={checkErrors}
      fName="Year"
      fieldError={fieldError}
      min={Number(1900)}
      max={Number(2021)}
      name="year"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="number"
      value={car.year}
    />
    <Field
      checkErrors={checkErrors}
      fName="Serial number"
      fieldError={fieldError}
      min={Number(99999999999)}
      max={Number(1000000000000)}
      name="serialNum"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="number"
      value={car.serialNum}
    />
    <Field
      checkErrors={checkErrors}
      fName="Description"
      fieldError={fieldError}
      maxLength={Number(30)}
      name="description"
      onChange={handleInputChange}
      setFieldError={setFieldError}
      type="text"
      value={car.description}
    />
  </div>
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
  checkErrors: PropTypes.func,
  // fieldError: PropTypes.object,
  handleInputChange: PropTypes.func,
  setFieldError: PropTypes.func,
};

export default AddUpdateForm;
