import React from 'react';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import Trow from './Trow';

const CarTable = ({
  sortedCars, updating, updateRow, deleteCar, currentCarSerNum, doSort, doSortUns,
}) => (
  <table>
    <thead>
      <tr>
        <th />
        <SortableTH
          doSort={doSort}
          doSortUns={doSortUns} //not used at the moment
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

CarTable.propTypes = {
  sortedCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,
  doSort: PropTypes.func,
  doSortUns: PropTypes.func,
};

export default CarTable;
