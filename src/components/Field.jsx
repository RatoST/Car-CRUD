import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ fName, minLength, maxLength, name, onChange, type, value }) => {

  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return true;
    }
    return 'Need to have at least 1 character.';
  };

  const validateMinLength = (inputText, N) => {
    const inputLength = inputText.length;
    if (inputLength >= N) {
      return true;
    }
    return `Need to have at least ${N} characters.`;
  };

  const validateMaxLength = (inputText, M) => {
    const inputLength = inputText.length;
    if (inputLength <= M) {
      return true;
    }
    return `Max of ${M} characters allowed.`;
  };

  const validateDigit = (inputText, X) => {
    const input = Number(inputText);
    if (typeof input === 'number' && inputText.length === X) {
      return true;
    }
    return `Input needs to have ${X} numbers.`;
  };

  const validate = () => {
    if (name === 'year') {
      return validateDigit(value, 4);
    } if (name === 'serialNum') {
      return validateDigit(value, 12);
    } if (name === 'description') {
      return validateMaxLength(value, 30);
    }
    return true;
  };

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
      <span className="formWarning"> {validate}</span>
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
