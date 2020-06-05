import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Field from './Field';
import fields from './fields';


const AddUpdateForm = ({ car, handleInputChange, vadlidationErrors = {} }) => (
  <div className="flex-container">
    {fields.map((field) => (
      <Field
        key={uuidv4()}
        fName={field.fName}
        fieldErrors={vadlidationErrors[field.name]}
        maxLength={field.maxLength}
        name={field.name}
        onChange={handleInputChange}
        type={field.type}
        value={car[field.name]}
      />))}
  </div>
);


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
  vadlidationErrors: PropTypes.shape(PropTypes.array),
};

export default AddUpdateForm;
