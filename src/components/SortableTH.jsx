import React, { useState } from 'react';

const SortableTH = ({ arrayOfObj, thTitle }) => {
  const initialThState = null;
  const [thState, setThState] = useState(initialThState);

  const desc = () => {
    arrayOfObj.sort((obj1, obj2) => {
      if (obj1.subObj.toUpperCase() > obj2.subObj.toUpperCase()) return 1;
      if (obj1.subObj.toUpperCase() < obj2.subIbj.toUpperCase()) return -1;
      return null;
    });
  };

  const asc = () => {
    arrayOfObj.sort((obj1, obj2) => {
      if (obj1.subObj.toUpperCase() > obj2.subObj.toUpperCase()) return -1;
      if (obj1.subObj.toUpperCase() < obj2.subIbj.toUpperCase()) return 1;
      return null;
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (thState === null) {
      setThState(asc);
    } if (thState === asc) {
      setThState(desc);
    } if (thState === desc) {
      setThState(null);
    }
  };

  const arrowUns = '&#x2195';
  const arrowDown = '&#x2193';
  const arrowUp = '&#x2191';

  const icon = () => {
    if (thState === null) {
      return arrowUns;
    } if (thState === asc) {
      return arrowDown;
    } if (thState === desc) {
      return arrowUp;
    } return null;
  };

  return (
    <>
      <th
        onClick={handleClick}
      >
        {thTitle}{icon}
      </th>
    </>
  );
};

export default SortableTH;
