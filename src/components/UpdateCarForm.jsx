import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddUpdateForm from './AddUpdateForm';

const UpdateCarForm = ({
  currentCar, setUpdating, updateCar,
}) => {
  const [car, setCar] = useState(currentCar);
  const [isDirty, setIsDirty] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
    setIsDirty(true);
  };

  useEffect(() => {
    setCar(currentCar);
  }, [currentCar]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCar(car);
    setIsDirty(false);
  };

  const handleCancel = () => {
    setUpdating(false);
    setIsDirty(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <AddUpdateForm
        car={car}
        handleInputChange={handleInputChange}
        isDirty={isDirty}
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
  updateCar: PropTypes.func,
};

export default UpdateCarForm;
