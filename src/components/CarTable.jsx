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
  const asc = 'asc';
  const desc = 'desc';
  const [sortOrder, setSortOrder] = useState(none);
  const [sortAttribute, setSortAttribute] = useState(none);

  const handleState = () => {
    if (sortOrder === none) {
      return setSortOrder(asc);
    } if (sortOrder === asc) {
      return setSortOrder(desc);
    } if (sortOrder === desc) {
      return setSortOrder(none);
    }
  };
  const doSort = (thTitle) => {
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
            handleState={handleState}
            sortOrder={sortOrder}
            setThTitle="Brand"
          />
          <SortableTH
            doSort={doSort}
            handleState={handleState}
            sortOrder={sortOrder}
            setThTitle="Country"
          />
          <SortableTH
            doSort={doSort}
            handleState={handleState}
            sortOrder={sortOrder}
            setThTitle="Model"
          />
          <SortableTH
            doSort={doSort}
            handleState={handleState}
            sortOrder={sortOrder}
            setThTitle="Year"
          />
          <th>Serial Number</th>
          <SortableTH
            doSort={doSort}
            handleState={handleState}
            sortOrder={sortOrder}
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
