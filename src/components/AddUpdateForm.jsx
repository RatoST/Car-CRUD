import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({
  car, handleInputChange }) => {
  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return true;
    }
    return 'empty';
  };

  const validateMaxLength = (inputText, M) => {
    const inputLength = inputText.length;
    if (inputLength <= M) {
      return true;
    }
    return 'maxLength';
  };

  const validateNumDigit = (inputText, X) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === X) {
      return true;
    }
    return '4num';
  };

  // const validationResult = () => {
  //   validateEmpty(car.brand);
  //   validateEmpty(car.country);
  //   validateEmpty(car.model);
  //   validateNumDigit(car.year, 4);
  //   validateNumDigit(car.serialNum, 12);
  //   validateEmpty(car.description);
  //   validateMaxLength(car.description, 30);
  // };

  return (
    <>
      <Field
        fName="Brand"
        name="brand"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.brand}
      />
      <Field
        fName="Country"
        name="country"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.country}
      />
      <Field
        fName="Model"
        name="model"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty}
        value={car.model}
      />
      <Field
        fName="Year"
        name="year"
        onChange={handleInputChange}
        type="text"
        validate={validateNumDigit(car.year, 4)}
        value={car.year}
      />
      <Field
        fName="Serial number"
        name="serialNum"
        onChange={handleInputChange}
        type="text"
        validate={validateNumDigit(car.serialNum, 12)}
        value={car.serialNum}
      />
      <Field
        fName="Description"
        name="description"
        onChange={handleInputChange}
        type="text"
        validate={validateMaxLength(car.description, 30)}
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
