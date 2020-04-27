import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const CarTable = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum, useSortableData,
}) => {
  const { requestSort, sortConfig } = useSortableData(filteredCars);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return undefined;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th />
          <th
            onClick={() => requestSort('brand')}
            className={`theadPoint ${getClassNamesFor('brand')}`}
          >
            Brand
          </th>
          <th
            onClick={() => requestSort('country')}
            className={`theadPoint ${getClassNamesFor('country')}`}
          >
            Country
          </th>
          <th>
            Model
          </th>
          <th>Year</th>
          <th>Serial Number</th>
          <th
            onClick={() => requestSort('description')}
            className={`theadPoint ${getClassNamesFor('description')}`}
          >
            Description
          </th>
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
  useSortableData: PropTypes.func,

};

export default CarTable;
