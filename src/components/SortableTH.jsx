import React, { useState } from 'react';

const SortableTH = () => {
  const initialThState = null;
  const [thState, setThState] = useState(initialThState);
  const thName = 'Brand';

  const desc = () => {
    arrayOfObj.sort((obj1, obj2) => {
      if (obj1.subObj.toUpperCase() > obj2.subObj.toUpperCase()) return 1;
      if (obj1.subObj.toUpperCase() < obj2.subIbj.toUpperCase()) return -1;
      return null;
    });
  };

  const handleClick = () => {
    setThState(desc);
  };

  return (
    <>
      <th
        onClick={handleClick}
      >
        {thName}
      </th>
      <Trow 
        thState={thState}
      />
    </>
  );
};

export default SortableTH;
