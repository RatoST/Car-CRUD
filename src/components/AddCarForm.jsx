import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddUpdateForm from './AddUpdateForm';

const AddCarForm = ({
  addCar, initialFormState, setAdding, validateState, setValidateState, validateExe,
  setValidateExe }) => {
  const [car, setCar] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!car.brand || !car.country) return;
    addCar(car);
    setCar(initialFormState);
    setValidateState(true);
  };

  const handleCancel = () => {
    setAdding(false);
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
        validateState={validateState}
        setValidateExe={setValidateExe}
      />
      <button className="button add-button" type="submit">Add new car</button>
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
  setValidateExe: PropTypes.func,
  setValidateState: PropTypes.func,
  validateExe: PropTypes.bool,
  validateState: PropTypes.bool,
};

export default AddCarForm;
