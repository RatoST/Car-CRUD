import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import Trow from './Trow';


const CarTable = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum, thState,
}) => {
  const [sortedCars, setSortedCars] = useState(filteredCars);
  const thTitle = 'Brand';

  const doSort = () => {
    const sortCars = _.orderBy(filteredCars, [thTitle.toLowerCase()], [thState]);
    setSortedCars(sortCars);
  };

  // const sortCars = _.orderBy(filteredCars, ['brand', 'model'], ['asc', 'desc']);

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
  thState: PropTypes.string,

};

export default CarTable;
