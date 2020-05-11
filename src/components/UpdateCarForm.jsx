import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddUpdateForm from './AddUpdateForm';

const UpdateCarForm = ({
  currentCar, setUpdating, updateCar, validateExe, setValidateState,
}) => {
  const [car, setCar] = useState(currentCar);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
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
    setValidateState(false);
  };

  const handleValidate = (event) => {
    setValidateState(true);
    if (validateExe === true) {
      return handleSubmit(event);
    }
    return event.preventDefault();
  };

  return (
    <form
      onSubmit={handleValidate}
    >
      <AddUpdateForm
        car={car}
        handleInputChange={handleInputChange}
      />
      <button type="submit" className="button add-button">Update car</button>
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
  setValidateState: PropTypes.func,
  updateCar: PropTypes.func,
  validateExe: PropTypes.bool,
};

export default UpdateCarForm;
