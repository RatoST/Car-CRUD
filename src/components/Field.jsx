import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ fName, min, max, name, onChange, type, value }) => {

  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return true;
    }
    return 'Need to have at least 1 character. ';
  };

  const validateIsNumeric = (inputText) => {
    const input = Number(inputText);
    if (typeof input === 'number') {
      return true;
    }
    return 'Need to be a number. ';
  };

  const validateMinLength = (inputText, N) => {
    const inputLength = inputText.length;
    if (inputLength >= N) {
      return true;
    }
    return `Need to have at least ${N} characters. `;
  };

  const validateMaxLength = (inputText, M) => {
    const inputLength = inputText.length;
    if (inputLength <= M) {
      return true;
    }
    return `Max of ${M} characters allowed. `;
  };

  const validateDigit = (inputText, X) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === X) {
      return true;
    }
    return `Input needs to have ${X} numbers. `;
  };

  const validateMin = (inputText, inputNum) => {
    if (typeof inputText === 'number' && inputText < inputNum) {
      return true;
    }
    return `Input needs to have ${inputNum} number. `;
  };

  const validateMax = (inputText, inputNum) => {
    if (typeof inputText === 'number' && inputText > inputNum) {
      return true;
    }
    return `Input needs to have ${inputNum} numbers. `;
  };

  const validate = () => {
    const validationErrors = [];
    if (type === 'number') {
      const typeError = validateIsNumeric(value);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (type === 'text') {
      const typeError = validateEmpty(value);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (type === 'number') {
      const typeError = validateMin(value, 1);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (type === 'number') {
      const typeError = validateMax(value, 12);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (name === 'year') {
      const typeError = validateDigit(value, 4);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (name === 'serialNum') {
      const typeError = validateDigit(value, 12);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    if (name === 'description') {
      const typeError = validateMaxLength(value, 30);
      if (typeError) {
        validationErrors.push(typeError);
      }
    }
    // other checks
    return validationErrors;
  };

  const errors = validate();

  return (
    <label className="formTitle">
      {fName}
      <input
        className="formInput"
        name={name}
        onChange={onChange}
        type={type}
        value={value}
        required
      />
      {errors.map(e => <span className="formWarning">{e}</span>)}
    </label>
  );
};

Field.propTypes = {
  fName: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Field;
