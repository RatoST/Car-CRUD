import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import isValid from '../utils';
import Fields from './Fields';

const UpdateCarForm = ({
  currentCar, setUpdating, updateCar,
}) => {
  const [car, setCar] = useState(currentCar);
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

  useEffect(() => {
    setCar(currentCar);
  }, [currentCar]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCar(car);
  };

  const handleCancel = () => {
    setUpdating(false);
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
        Update car
      </button>
      <button
        type="submit"
        onClick={handleCancel}
        className="button cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};


UpdateCarForm.propTypes = {
  currentCar: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  setUpdating: PropTypes.func,
  updateCar: PropTypes.func,
};

export default UpdateCarForm;
