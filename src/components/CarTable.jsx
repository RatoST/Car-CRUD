import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const CarTable = ({
  cars, updating, updateRow, deleteCar, currentCarSerNum,
}) => (
  <table>
    <thead>
      <tr>
        <th>{updating && <span> </span> }</th>
        <th>Brand</th>
        <th>Country</th>
        <th>Model</th>
        <th>Year</th>
        <th>Serial Number</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {cars.length > 0 ? (
        cars.map((car) => (
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
        ))
      ) : (
        <tr>
          <td colSpan={3}>No cars </td>
        </tr>
      )}
    </tbody>
  </table>
);

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,

};

export default CarTable;
