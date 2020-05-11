import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ fName, name, onChange, type, validate, value, validateState }) => {

  return (
    <label className="formTitle">
      {fName}
      <input
        className="formInput"
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      <span className="formWarning"> {validateState ? validate : '' }</span>
    </label>
  );
};

Field.propTypes = {
  fName: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  validate: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  validateState: PropTypes.bool,
};

export default Field;
