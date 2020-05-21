import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Field = ({ fName, min, max, maxLength, name, onChange, type, value }) => {
  // const [isDirty, setIsDirty] = useState(false);
  // const [initialValue, setInitialValue] = useState(value);
  // const NONE = '';

  // const validateEmpty = (inputText) => {
  //   if (inputText.length > 0) {
  //     return true;
  //   }
  //   return 'Need to have at least 1 character. ';
  // };

  // const validateIsNumeric = (inputText) => {
  //   const input = Number(inputText);
  //   if (typeof input === 'number') {
  //     return true;
  //   }
  //   return 'Need to be a number. ';
  // };

  // const validateMaxLength = (inputText, M) => {
  //   const inputLength = inputText.length;
  //   if (inputLength <= M) {
  //     return true;
  //   }
  //   return `Max of ${M} characters allowed. `;
  // };

  // const validateMin = (inputText, inputNum) => {
  //   if (inputText > inputNum) {
  //     return true;
  //   }
  //   return `Input should be more than ${inputNum} . `;
  // };

  // const validateMax = (inputText, inputNum) => {
  //   if (inputText < inputNum) {
  //     return true;
  //   }
  //   return `Input should be less than ${inputNum} . `;
  // };

  // const validate = () => {
  //   const validationErrors = [];
  //   if (type === 'number') {
  //     const typeError = validateIsNumeric(value);
  //     if (typeError) {
  //       validationErrors.push(typeError);
  //     }
  //   }
  //   if (type === 'text') {
  //     const typeError = validateEmpty(value);
  //     if (typeError) {
  //       validationErrors.push(typeError);
  //     }
  //   }
  //   if (type === 'number') {
  //     const typeError = validateMin(value, min);
  //     if (typeError) {
  //       validationErrors.push(typeError);
  //     }
  //   }
  //   if (type === 'number') {
  //     const typeError = validateMax(value, max);
  //     if (typeError) {
  //       validationErrors.push(typeError);
  //     }
  //   }

  //   if (type === 'text') {
  //     const typeError = validateMaxLength(value, maxLength);
  //     if (typeError) {
  //       validationErrors.push(typeError);
  //     }
  //   }

  //   // other checks
  //   return validationErrors;
  // };

  // const handleChange = (event) => {
  //   event.preventDefault();
  //   onChange(event);
  //   if (initialValue !== value) {
  //     setIsDirty(true);
  //   }
  // };

  // const errors = validate();

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
      {/* {isDirty ? errors.map(e => <span key={uuidv4()} className="formWarning">{e}</span>) : NONE } */}
    </label>
  );
};

Field.propTypes = {
  fName: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.string,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Field;
