import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ deleteCar, carId }) => (
  <button type="button"
    className="button delete-button"
    onClick={() => {
      deleteCar(carId);
    }}
  >Delete
  </button>
);

DeleteButton.propTypes = {
  deleteCar: PropTypes.func,
  carId: PropTypes.number,
};

export default DeleteButton;
