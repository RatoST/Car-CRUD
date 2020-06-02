import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import isValid from '../utils';


const Field = ({
  fName, min, max, maxLength, name, onChange, type, value,
}) => {
  const [isDirty, setIsDirty] = useState(false);
  const [initialValue] = useState(value);
  const [fieldError, setFieldError] = useState({});
  const NONE = '';

  const validateEmpty = (inputText) => {
    if (inputText.length > 0) {
      return false;
    }
    return 'Need to have at least 1 character. ';
  };

  const validateIsNumeric = (inputText) => {
    const input = Number(inputText);
    if (typeof input === 'number') {
      return false;
    }
    return 'Need to be a number. ';
  };

  const validateMaxLength = (inputText, M) => {
    const inputLength = inputText.length;
    if (inputLength <= M) {
      return false;
    }
    return `Max of ${M} characters allowed. `;
  };

  const validateMin = (inputText, inputNum) => {
    if (inputText > inputNum) {
      return false;
    }
    return `Input should be more than ${inputNum} . `;
  };

  const validateMax = (inputText, inputNum) => {
    if (inputText < inputNum) {
      return false;
    }
    return `Input should be less than ${inputNum} . `;
  };

  const validate = () => {
    const validationErrors = [];
    if (type === 'number') {
      const typeError1 = validateIsNumeric(value);
      if (typeError1) {
        validationErrors.push(typeError1);
      }
    }
    if (type === 'text') {
      const typeError2 = validateEmpty(value);
      if (typeError2) {
        validationErrors.push(typeError2);
      }
    }
    if (type === 'number') {
      const typeError3 = validateMin(value, min);
      if (typeError3) {
        validationErrors.push(typeError3);
      }
    }
    if (type === 'number') {
      const typeError4 = validateMax(value, max);
      if (typeError4) {
        validationErrors.push(typeError4);
      }
    }

    if (type === 'text') {
      const typeError5 = validateMaxLength(value, maxLength);
      if (typeError5) {
        validationErrors.push(typeError5);
      }
    }

    // other checks
    return validationErrors;
  };

  const handleChange = (event) => {
    const errors = validate();
    setFieldError(errors);
    event.preventDefault();
    onChange(event);
    if (initialValue !== value) {
      setIsDirty(true);
    } else {
      setIsDirty(false);
    }
    isValid(errors);
  };

  return (
    <label className="formTitle">
      {fName}
      <input
        className="formInput"
        name={name}
        onChange={handleChange}
        type={type}
        value={value}
      />
      {isDirty ? fieldError.map(e => <span key={uuidv4()} className="formWarning">{e}</span>) : NONE }
    </label>
  );
};

Field.propTypes = {
  fName: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Field;
