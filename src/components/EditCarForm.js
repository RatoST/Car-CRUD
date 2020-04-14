import React, { useState, useEffect } from "react";

const EditCarForm = props => {
  const [car, setCar] = useState(props.currentCar);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  useEffect(() => {
    setCar(props.currentCar);
  }, [props]);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateCar(car.id, car);
      }}
    >
      <label>Brand</label>
      <input
        type="text"
        name="brand"
        value={car.brand}
        onChange={handleInputChange}
      />
      <label>Country</label>
      <input
        type="text"
        name="country"
        value={car.country}
        onChange={handleInputChange}
      />
      <label>Model</label>
      <input
        type="text"
        name="model"
        value={car.model}
        onChange={handleInputChange}
      />
      <label>Year</label>
      <input
        type="number"
        name="year"
        value={car.year}
        onChange={handleInputChange}
      />
      <label>Serial Number</label>
      <input
        type="number"
        name="serialNum"
        value={car.serialNum}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={car.description}
        onChange={handleInputChange}
      />
      <button className="button add-button">Update car</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button cancel-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditCarForm;
