import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


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
      <Field
        name="Brand"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.brand}
      />
      <Field
        name="Country"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.country}
      />
      <Field
        name="Model"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.model}
      />
      <Field
        name="Year"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.year}
      />
      <Field
        name="Serial number"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.serialNum}
      />
      <Field
        name="Description"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.description}
      />
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
