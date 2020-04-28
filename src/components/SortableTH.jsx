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

  return (
    <>
      <th
        onClick={handleClick}
      >
        {thTitle}
      </th>
    </>
  );
};

export default SortableTH;
