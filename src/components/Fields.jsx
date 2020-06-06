import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import fieldsValue from './fieldsValue';


const Fields = ({ car, handleInputChange, vadlidationErrors = {} }) => (
  <div className="flex-container">
    {fieldsValue.map((field) => (
      <Field
        key={field.id}
        label={field.label}
        fieldErrors={vadlidationErrors[field.name]}
        max={field.max}
        maxLength={field.maxLength}
        min={field.min}
        name={field.name}
        onChange={handleInputChange}
        type={field.type}
        value={car[field.name]}
      />))}
  </div>
);

Fields.propTypes = {
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
  vadlidationErrors: PropTypes.shape({
    type: PropTypes.string,
    default: PropTypes.string,
  }),
};

export default Fields;
