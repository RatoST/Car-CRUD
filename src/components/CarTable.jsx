import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import Trow from './Trow';


const CarTable = ({
  filteredCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => {
  const [sortedCars, setSortedCars] = useState(filteredCars);


  const doSort = (thTitle, thState) => {
    const sortCars = _.orderBy(filteredCars, [thTitle.toLowerCase()], [thState]);
    setSortedCars(sortCars);
  };

  const doSortUns = () => {
    setSortedCars(filteredCars);
  };

  return (
    <table>
      <thead>
        <tr>
          <th />
          <SortableTH
            doSort={doSort}
            doSortUns={doSortUns}
            setThTitle="Brand"
          />
          <SortableTH
            doSort={doSort}
            doSortUns={doSortUns}
            setThTitle="Country"
          />
          <SortableTH
            doSort={doSort}
            doSortUns={doSortUns}
            setThTitle="Model"
          />
          <SortableTH
            doSort={doSort}
            doSortUns={doSortUns}
            setThTitle="Year"
          />
          <th>Serial Number</th>
          <SortableTH
            doSort={doSort}
            doSortUns={doSortUns}
            setThTitle="Description"
          />
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
