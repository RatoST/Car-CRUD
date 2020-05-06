import React from 'react';
import PropTypes from 'prop-types';


const AddUpdateForm = ({
  car, handleInputChange }) => {
  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return true;
    }
    return 'Need to have at least 1 character.';
  };

  const validateMaxLength = (inputText, M) => {
    const inputLength = inputText.length;
    if (inputLength <= M) {
      return true;
    }
    return `Max of ${M} characters allowed.`;
  };

  const validateNumDigit = (inputText, X) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === X) {
      return 'true';
    }
    return 'false';
  };

  const validationResult = () => {
    validateEmpty(car.brand);
    validateEmpty(car.country);
    validateEmpty(car.model);
    validateNumDigit(car.year, 4);
    validateNumDigit(car.serialNum, 12);
    validateEmpty(car.description);
    validateMaxLength(car.description, 30);
  };

  return (
    <>
      <label className="formTitle">
        Brand
        <input
          name="brand"
          onChange={handleInputChange}
          type="text"
          value={car.brand}
        />
        <span className="formWarning"> {}</span>
      </label>
      <label className="formTitle">
        Country
        <input
          name="country"
          onChange={handleInputChange}
          type="text"
          value={car.country}
        />
        <span className="formWarning"> {}</span>
      </label>
      <label className="formTitle">
        Model
        <input
          name="model"
          onChange={handleInputChange}
          type="text"
          value={car.model}
        />
        <span className="formWarning"> {}</span>
      </label>
      <label className="formTitle">
        Year
        <input
          name="year"
          onChange={handleInputChange}
          type="text"
          value={car.year}
        />
        <span className="formWarning">{}</span>
      </label>
      <label className="formTitle">
        Serial Number
        <input
          name="serialNum"
          onChange={handleInputChange}
          type="text"
          value={car.serialNum}
        />
        <span className="formWarning"> {}</span>
      </label>
      <label className="formTitle">
        Description
        <input
          name="description"
          onChange={handleInputChange}
          type="text"
          value={car.description}
        />
        <span className="formWarning"> {}</span>
      </label>
    </>
  );
};

AddUpdateForm.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  handleInputChange: PropTypes.func,
};

export default AddUpdateForm;
