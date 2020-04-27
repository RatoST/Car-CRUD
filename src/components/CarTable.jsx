import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const CarTable = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => {
  const compare = (a, b) => {
    const brandA = a.brand.toLowerCase();
    const brandB = b.brand.toLowerCase();

    let comparison = 0;
    if (brandA > brandB) {
      comparison = 1;
    } else if (brandA < brandB) {
      comparison = -1;
    }
    return comparison;
  };

  filteredCars.sort(compare);
  return (
    <table>
      <thead>
        <tr>
          <th />
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
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
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
};

CarTable.propTypes = {
  filteredCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,

};

export default CarTable;
