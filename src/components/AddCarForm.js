import React, { useState } from "react";

const AddCarForm = props => {
  const initialFormState = {
    id: null,
    brand: "",
    country: "",
    model: "",
    year: "",
    serialNum: "",
    description: ""
  };

  const [car, setCar] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!car.brand || !car.country) return;
        props.addCar(car);
        setCar(initialFormState);
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
      <button className="button add-button">Add new car</button>
    </form>
  );
};

export default AddCarForm;
