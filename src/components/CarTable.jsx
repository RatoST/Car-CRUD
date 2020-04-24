import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import ClickEdit from './ClickEdit';

const CarTable = ({
  cars, editing, editRow, deleteCar, currentCarSerNum,
}) => {
  const [isMouseOver, setMouseOver] = useState(false);

  const handleMouseOver = () => {
    setMouseOver(true);
  };

  const handleMouseOut = () => {
    setMouseOver(false);
  };

  return (

    <table>
      <thead>
        <tr>
          <th>{editing && <span> Edit</span> }</th>
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
        {cars.length > 0 ? (
          cars.map((car) => (
            <tr
              className={isMouseOver ? 'poinTypePoint' : 'poinTypeInit'}
              key={car.id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onFocus={handleMouseOver}
              onBlur={handleMouseOut}
            >
              <ClickEdit
                editing={editing}
                editRow={editRow}
                car={car}
                currentCarSerNum={currentCarSerNum}
              />

              <td>
                <DeleteButton
                  deleteCar={deleteCar}
                  carId={car.id}
                />

              </td>
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
  editing: PropTypes.bool,
  editRow: PropTypes.func,
  deleteCar: PropTypes.func,
  currentCarSerNum: PropTypes.string,

};

export default CarTable;
