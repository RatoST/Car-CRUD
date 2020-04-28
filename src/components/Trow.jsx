import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const Trow = ({
  sortedCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => (
  <>
    {sortedCars.map((car) => (
      <tr key={car.id}>
        <UpdatedTableRow
          updating={updating}
          updateRow={updateRow}
          car={car}
          currentCarSerNum={currentCarSerNum}
        />
        <DeleteButton
          deleteCar={deleteCar}
          carId={car.id}
        />
      </tr>
    ))}
  </>
);
Trow.propTypes = {
  sortedCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,

};
export default Trow;
