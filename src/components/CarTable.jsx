import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import SortableTH from './SortableTH';
import DeleteButton from './DeleteButton';
import UpdatedTableRow from './UpdatedTableRow';

const CarTable = ({
  sortedCars, updating, updateRow, deleteCar, currentCarSerNum, setCars,
}) => {
  // const [initState] = useState(cars); //not used at the moment

  const doSort = (thTitle, thState) => {
    const sortCars = _.orderBy(sortedCars, [thTitle.toLowerCase()], [thState]);
    setCars(sortCars);
  };

  // const doSortUns = () => { // not used at the moment
  //   setCars(initState);
  // };

  return (
    <table>
      <thead>
        <tr>
          <th />
          <SortableTH
            doSort={doSort}
            // doSortUns={doSortUns} //not used at the moment
            setThTitle="Brand"
          />
          <SortableTH
            doSort={doSort}
            // doSortUns={doSortUns}
            setThTitle="Country"
          />
          <SortableTH
            doSort={doSort}
            // doSortUns={doSortUns}
            setThTitle="Model"
          />
          <SortableTH
            doSort={doSort}
            // doSortUns={doSortUns}
            setThTitle="Year"
          />
          <th>Serial Number</th>
          <SortableTH
            doSort={doSort}
            // doSortUns={doSortUns}
            setThTitle="Description"
          />
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedCars.length > 0 ? (
          sortedCars.map((car) => (
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
  setCars: PropTypes.func,
  sortedCars: PropTypes.arrayOf(PropTypes.object),
  updating: PropTypes.bool,
  updateRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,
};

export default CarTable;
