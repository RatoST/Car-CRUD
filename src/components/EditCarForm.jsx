import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AddEditForm from './AddEditForm';

const EditCarForm = ({
  currentCar, updateCar, setEditing,
}) => {
  const [car, setCar] = useState(currentCar);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  useEffect(() => {
    setCar(currentCar);
  }, [currentCar]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        updateCar(car);
      }}
    >
      <AddEditForm
        car={car}
        handleInputChange={handleInputChange}
      />
      <button type="submit" className="button add-button">Update car</button>
      <button
        type="submit"
        onClick={() => {
          setEditing(false);
        }}
        className="button cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};


EditCarForm.propTypes = {
  currentCar: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  updateCar: PropTypes.func,
  setEditing: PropTypes.func,
};

export default EditCarForm;
