import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({
  car, checkErrors, handleInputChange, setError }) => {

  return (
    <div className="flex-container">
      <Field
        checkErrors={checkErrors}
        fName="Brand"
        maxLength={Number(15)}
        name="brand"
        onChange={handleInputChange}
        setError={setError}
        type="text"
        value={car.brand}
      />
      <Field
        checkErrors={checkErrors}
        fName="Country"
        maxLength={Number(15)}
        name="country"
        onChange={handleInputChange}
        setError={setError}
        type="text"
        value={car.country}
      />
      <Field
        checkErrors={checkErrors}
        fName="Model"
        maxLength={Number(15)}
        name="model"
        onChange={handleInputChange}
        setError={setError}
        type="text"
        value={car.model}
      />
      <Field
        checkErrors={checkErrors}
        fName="Year"
        min={Number(1900)}
        max={Number(2021)}
        name="year"
        onChange={handleInputChange}
        setError={setError}
        type="number"
        value={car.year}
      />
      <Field
        checkErrors={checkErrors}
        fName="Serial number"
        min={Number(99999999999)}
        max={Number(1000000000000)}
        name="serialNum"
        onChange={handleInputChange}
        setError={setError}
        type="number"
        value={car.serialNum}
      />
      <Field
        checkErrors={checkErrors}
        fName="Description"
        maxLength={Number(30)}
        name="description"
        onChange={handleInputChange}
        setError={setError}
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
  checkErrors: PropTypes.func,
  handleInputChange: PropTypes.func,
  setError: PropTypes.func,
};

export default AddUpdateForm;
