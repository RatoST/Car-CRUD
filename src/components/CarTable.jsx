import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const CarTable = ({
  sortedCars, updating, updateRow, deleteCar, currentCarSerNum,
}) => {
  const none = null;
  const [sortOrder, setSortOrder] = useState(none);
  const [sortAttribute, setSortAttribute] = useState(none);
  const doSort = (thTitle, thState) => {
    setSortOrder(thState);
    setSortAttribute(thTitle);
  };
  const tableCars = sortOrder === none ? sortedCars
    : (_.orderBy(sortedCars, [sortAttribute.toLowerCase()], [sortOrder]));

  return (
    <table>
      <thead>
        <tr>
          <th />
          <SortableTH
            doSort={doSort}
            setThTitle="Brand"
          />
          <SortableTH
            doSort={doSort}
            setThTitle="Country"
          />
          <SortableTH
            doSort={doSort}
            setThTitle="Model"
          />
          <SortableTH
            doSort={doSort}
            setThTitle="Year"
          />
          <th>Serial Number</th>
          <SortableTH
            doSort={doSort}
            setThTitle="Description"
          />
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableCars.length > 0 ? (
          tableCars.map((car) => (
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
  sortedCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,
};

export default CarTable;
