import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ deleteCar, carId }) => (
  <td>
    <button type="button"
      className="button delete-button"
      onClick={() => {
        deleteCar(carId);
      }}
    >Delete
    </button>
  </td>
);

DeleteButton.propTypes = {
  deleteCar: PropTypes.func,
  carId: PropTypes.string,
};

export default DeleteButton;
