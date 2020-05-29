import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddUpdateForm from './AddUpdateForm';


const AddCarForm = ({
  addCar, checkErrors, initialFormState, setAdding }) => {
  const [car, setCar] = useState(initialFormState);
  const [error, setError] = useState(false);
  const [toggleButton, setToggleButton] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const handleInputChange = (event) => {
    if (error === true) {
      setToggleButton(true);
    } else {
      setToggleButton(false);
    }
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
    if (toggleButton === true) {
      setDisableButton(false);
    } if (toggleButton === false) {
      setDisableButton(true);
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

  console.log('Error is ' + error);
  console.log('Disable is ' + disableButton);


  return (
    <form
      onSubmit={handleSubmit}
    >
      <AddUpdateForm
        car={car}
        checkErrors={checkErrors}
        setError={setError}
        handleInputChange={handleInputChange}
      />
      <button
        disabled={disableButton}
        className="button add-button"
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
  checkErrors: PropTypes.func,
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
