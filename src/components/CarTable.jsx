import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import ClickEdit from './ClickEdit';

const CarTable = ({
  cars, editRow, deleteCar, pencil, currentCarSerNum,
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
                editRow={editRow}
                car={car}
                pencil={pencil}
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
  editRow: PropTypes.func,
  deleteCar: PropTypes.func,
  pencil: PropTypes.bool,
  currentCarSerNum: PropTypes.string,

};

export default CarTable;
