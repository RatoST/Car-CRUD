import React from "react";

const CarTable = props => {
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
        {props.cars.length > 0 ? (
          props.cars.map(car => (
            <tr key={car.id}>
              <td>{car.brand}</td>
              <td>{car.country}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.serialNum}</td>
              <td>{car.description}</td>
              <td>
                <button
                  onClick={() => {
                    props.editRow(car);
                  }}
                  className="button edit-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteCar(car.id)}
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

export default CarTable;
