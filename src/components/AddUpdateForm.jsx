import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';


const AddUpdateForm = ({
  car, handleInputChange, validateState, setValidateExe }) => {
  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return true;
    }
    return 'Need to have at least 1 character.';
  };

  const validateMaxLength = (inputText, X, M) => {
    const inputLength = inputText.length;
    if (inputLength > X && inputLength <= M) {
      return true;
    }
    return `Necessary value from ${X} to ${M}.`;
  };

  const validate4Digit = (inputText) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === 4) {
      return true;
    }
    return 'Input needs to have 4 numbers.';
  };

  const validate12Digit = (inputText) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === 12) {
      return true;
    }
    return 'Input needs to have 12 numbers.';
  };

  const validationResult = () => {
    if (validateEmpty && validateMaxLength && validate4Digit && validate12Digit) {
      return setValidateExe(true);
    }
    return setValidateExe(false);
  };

  return (
    <div className="flex-container">
      <Field
        fName="Brand"
        name="brand"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty(car.brand)}
        value={car.brand}
        validateState={validateState}
      />
      <Field
        fName="Country"
        name="country"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty(car.country)}
        value={car.country}
        validateState={validateState}
      />
      <Field
        fName="Model"
        name="model"
        onChange={handleInputChange}
        type="text"
        validate={validateEmpty(car.model)}
        value={car.model}
        validateState={validateState}
      />
      <Field
        fName="Year"
        name="year"
        onChange={handleInputChange}
        type="text"
        validate={validate4Digit(car.year)}
        value={car.year}
        validateState={validateState}
      />
      <Field
        fName="Serial number"
        name="serialNum"
        onChange={handleInputChange}
        type="text"
        validate={validate12Digit(car.serialNum)}
        value={car.serialNum}
        validateState={validateState}
      />
      <Field
        fName="Description"
        name="description"
        onChange={handleInputChange}
        type="text"
        validate={validateMaxLength(car.description, 5, 30)}
        value={car.description}
        validateState={validateState}
      />
    </div>
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
  setValidateExe: PropTypes.func,
  validateState: PropTypes.bool,
};

export default AddUpdateForm;
