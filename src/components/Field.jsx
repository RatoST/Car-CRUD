import React from 'react';
import PropTypes from 'prop-types';

const Field = ({ name, onChange, type, value }) => {
  return (
    <>
      <label className="formTitle">
        {name}
        <input
          name={name}
          onChange={onChange}
          type={type}
          value={value}
        />
        <span className="formWarning"> {}</span>
      </label>
    </>
  );
};

Field.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Field;
