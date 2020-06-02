import React, { useState } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import isValid from '../utils';
import AddUpdateForm from './AddUpdateForm';


const AddCarForm = ({
  addCar, initialFormState, setAdding }) => {
  const [car, setCar] = useState(initialFormState);
  const [fieldError, setFieldError] = useState({});
  const [valid, setValid] = useState(false);

  const handleInputChange = (event, errors, nameEr) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
    setFieldError({ ...fieldError, [nameEr]: errors });
    if (fieldError[nameEr] && !isEmpty(fieldError[nameEr])) {
      setValid(false);
    } else {
      setValid(true);
    }
    // if (isValid(errors) === true) {
    //   setValid(true);
    // }
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
        fieldError={fieldError}
        handleInputChange={handleInputChange}
      />
      <button
        disabled={valid}
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
