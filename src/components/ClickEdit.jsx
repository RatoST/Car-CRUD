import React from 'react';
import PropTypes from 'prop-types';

const ClickEdit = ({
  editRow, car, currentCarSerNum, pencil,
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
        {car.serialNum === currentCarSerNum && <span className={pencil ? 'disPen' : 'remPen'}>🖉</span>}{' '}
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
  editRow: PropTypes.func,
  car: PropTypes.shape({
    id: PropTypes.number,
    brand: PropTypes.string,
    country: PropTypes.string,
    model: PropTypes.string,
    year: PropTypes.string,
    serialNum: PropTypes.string,
    description: PropTypes.string,
  }),
  currentCarSerNum: PropTypes.string,
  pencil: PropTypes.bool,

};

export default ClickEdit;
