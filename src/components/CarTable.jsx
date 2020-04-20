import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CarTable = ({
  cars, editRow, deleteCar, pencil,
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
              className={isMouseOver ? 'poinTypeGrab' : 'poinTypeInit'}
              key={car.id}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onFocus={handleMouseOver}
              onBlur={handleMouseOut}
              onClick={() => {
                editRow(car);
              }}
            >
              <td>{car.brand}</td>
              <td>{car.country}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.serialNum}</td>
              <td>{car.description}</td>
              <td>
                <span className={`button edit-button ${pencil ? 'disPen' : 'remPen'}`}>🖉</span>
                <button
                  type="button"
                  onClick={() => {
                    deleteCar(car.id);
                  }}
                  className="button delete-button"
                >
                  Delete
                </button>
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

};

export default CarTable;
