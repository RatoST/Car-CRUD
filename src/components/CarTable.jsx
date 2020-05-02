import React, { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const NONE = 'NONE';
const ASC = 'asc';
const DESC = 'desc';

const CarTable = ({
  cars, currentCarSerNum, deleteCar, updating, updateRow,
}) => {
  const [sortOrder, setSortOrder] = useState(NONE);
  const [sortAttribute, setSortAttribute] = useState(NONE);

  const handleState = () => {
    if (sortOrder === NONE) {
      setSortOrder(ASC);
    } if (sortOrder === ASC) {
      setSortOrder(DESC);
    } if (sortOrder === DESC) {
      setSortOrder(NONE);
    }
  };
  const doSort = (thTitle) => {
    setSortAttribute(thTitle);
  };
  const tableCars = sortOrder === NONE ? cars
    : (_.orderBy(cars, [sortAttribute.toLowerCase()], [sortOrder]));

  return (
    <table>
      <thead>
        <tr>
          <th />
          <SortableTH
            ASC={ASC}
            DESC={DESC}
            doSort={doSort}
            handleState={handleState}
            NONE={NONE}
            sortOrder={sortOrder}
            sortAttribute={sortAttribute}
            title="Brand"
          />
          <SortableTH
            ASC={ASC}
            DESC={DESC}
            doSort={doSort}
            handleState={handleState}
            NONE={NONE}
            sortOrder={sortOrder}
            sortAttribute={sortAttribute}
            title="Country"
          />
          <SortableTH
            ASC={ASC}
            DESC={DESC}
            doSort={doSort}
            handleState={handleState}
            NONE={NONE}
            sortOrder={sortOrder}
            sortAttribute={sortAttribute}
            title="Model"
          />
          <SortableTH
            ASC={ASC}
            DESC={DESC}
            doSort={doSort}
            handleState={handleState}
            NONE={NONE}
            sortOrder={sortOrder}
            sortAttribute={sortAttribute}
            title="Year"
          />
          <th>Serial Number</th>
          <SortableTH
            ASC={ASC}
            DESC={DESC}
            doSort={doSort}
            handleState={handleState}
            NONE={NONE}
            sortOrder={sortOrder}
            sortAttribute={sortAttribute}
            title="Description"
          />
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableCars.length > 0 ? (
          tableCars.map((car) => (
            <tr key={car.id}>
              <UpdatedTableRow
                car={car}
                currentCarSerNum={currentCarSerNum}
                updating={updating}
                updateRow={updateRow}
              />
              <DeleteButton
                carId={car.id}
                deleteCar={deleteCar}
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
  cars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,
};

export default CarTable;
export { ASC, DESC, NONE };
