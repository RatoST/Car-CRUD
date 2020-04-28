import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import Trow from './Trow';


const CarTable = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => {
  const [sortedCars, setSortedCars] = useState(filteredCars);

  const doSort = () => {
    _.sortBy(filteredCars, ['brand', 'model']);
  };

  const thTitle = 'Brand';

  return (
    <table>
      <thead>
        <tr>
          <th />
          <SortableTH
            thTitle={thTitle}
            doSort={doSort}
          />
          {/* <th>Brand</th> */}
          <th>Country</th>
          <th>Model</th>
          <th>Year</th>
          <th>Serial Number</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedCars.length > 0 ? (
          <Trow
            currentCarSerNum={currentCarSerNum}
            deleteCar={deleteCar}
            sortedCars={sortedCars}
            updating={updating}
            updateRow={updateRow}
          />
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
