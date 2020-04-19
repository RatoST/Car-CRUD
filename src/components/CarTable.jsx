import React from 'react';
import PropTypes from 'prop-types';

const CarTable = ({ cars, editRow, deleteCar }) => (
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
          <tr key={car.id}>
            <td>{car.brand}</td>
            <td>{car.country}</td>
            <td>{car.model}</td>
            <td>{car.year}</td>
            <td>{car.serialNum}</td>
            <td>{car.description}</td>
            <td>
              <button
                type="button"
                onClick={() => {
                  editRow(car);
                }}
                className="button edit-button"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteCar(car.id)}
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

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object),
  editRow: PropTypes.func,
  deleteCar: PropTypes.func,
};

export default CarTable;
