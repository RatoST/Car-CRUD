import React from 'react';
import PropTypes from 'prop-types';

const ClickEdit = ({
  editing, editRow, car, currentCarSerNum,
}) => {
  const click = () => {
    editRow(car);
  };

  const keyDown = () => {
    editRow(car);
  };

  return (
    <>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.serialNum === currentCarSerNum && editing && <span>🖉</span> }{' '}
        {car.brand}
      </td>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.country}
      </td>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.model}
      </td>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.year}
      </td>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.serialNum}
      </td>
      <td
        onClick={click}
        onKeyDown={keyDown}
        role="presentation"
      >
        {car.description}
      </td>
    </>
  );
};

ClickEdit.propTypes = {
  editing: PropTypes.bool,
  editRow: PropTypes.func,
  car: PropTypes.shape({
    id: PropTypes.string,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  currentCarSerNum: PropTypes.string,

};

export default ClickEdit;
