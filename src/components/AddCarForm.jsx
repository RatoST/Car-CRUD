import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddUpdateForm from './AddUpdateForm';


const AddCarForm = ({
  addCar, initialFormState, setAdding }) => {
  const [car, setCar] = useState(initialFormState);
  const initialErrorState = {
    brand: ['Need to have at least 1 character. ', 'Max of 15 characters allowed.'],
    country: ['Need to have at least 1 character. ', 'Max of 15 characters allowed.'],
    model: ['Need to have at least 1 character. ', 'Max of 15 characters allowed.'],
    year: ['Need to be a number. ', 'Input should be more than 1900. ', 'Input should be less than 2020. . '],
    serialNum: ['Need to be a number. ', 'Input should be more than 99999999999. ', 'Input should be less than 1000000000000. . '],
    description: ['Need to have at least 1 character. ', 'Max of 30 characters allowed.'],
  };
  const [fieldError, setFieldError] = useState([initialErrorState]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
    setFieldError({ ...fieldError, [name]: value });
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
      <AddUpdateForm
        car={car}
        handleInputChange={handleInputChange}
      />
      <button
        // disabled=
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
