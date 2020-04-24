import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddEditForm from './AddEditForm';

const AddCarForm = ({ addCar, initialFormState }) => {
  const [car, setCar] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!car.brand || !car.country) return;
        addCar(car);
        setCar(initialFormState);
      }}
    >
      <AddEditForm
        car={car}
        handleInputChange={handleInputChange}
      />
      <button type="submit" className="button add-button">Add new car</button>
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
};

export default AddCarForm;
