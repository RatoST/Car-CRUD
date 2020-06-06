import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isValid from '../utils';
import Fields from './Fields';


const AddCarForm = ({
  addCar, initialFormState, setAdding }) => {
  const [car, setCar] = useState(initialFormState);
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (event, errors) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
    const allErrors = ({ ...validationErrors, [name]: errors });
    setValidationErrors(allErrors);
    if (!isValid(allErrors)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!car.brand || !car.country) return;
    addCar(car);
    setCar(initialFormState);
  };

  const handleCancel = () => {
    setAdding(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <Fields
        car={car}
        handleInputChange={handleInputChange}
        vadlidationErrors={validationErrors}
      />
      <button
        className="button add-button"
        disabled={isFormValid}
        type="submit"
      >
        Add new car
      </button>
      <button
        className="button cancel-button"
        onClick={handleCancel}
        type="submit"
      >
        Cancel
      </button>
    </form>
  );
};

AddCarForm.propTypes = {
  addCar: PropTypes.func.isRequired,
  initialFormState: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  setAdding: PropTypes.func,
};

export default AddCarForm;
