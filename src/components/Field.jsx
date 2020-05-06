import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ fName, name, onChange, type, validate, value }) => {

  const NONE = 'NONE';

  const message = () => {
    if (validate === 'empty') {
      return 'Need to have at least 1 character.';
    } if (validate === 'maxLength') {
      return 'Max of 30 characters allowed.';
    } if (validate === '4num') {
      return 'Input needs to have 4 digits';
    } return NONE;
  };

  return (
    <label className="formTitle">
      {fName}
      <input
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
      <span className="formWarning"> {validate ? '' : message}</span>
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
};

export default Field;
