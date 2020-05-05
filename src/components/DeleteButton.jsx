import React from 'react';
import PropTypes from 'prop-types';

const DeleteButton = ({ carId, deleteCar }) => {
  const handleDelete = () => {
    deleteCar(carId);
  };

  return (
    <td>
      <button type="button"
        className="button delete-button"
        onClick={handleDelete}
      >Delete
      </button>
    </td>
  );
};
DeleteButton.propTypes = {
  carId: PropTypes.string,
  deleteCar: PropTypes.func,
};

export default DeleteButton;
