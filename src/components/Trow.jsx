import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const Trow = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => (
  <>
    {filteredCars.map((car) => (
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
  filteredCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,

};
export default Trow;