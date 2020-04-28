import React, { useState } from 'react';

const SortableTH = ({ doSort, thTitle }) => {
  const initialThState = null;
  const [thState, setThState] = useState(initialThState);

  const asc = 1;
  const desc = -1;
  const none = null;
  const arrowUns = <>&#x2195;</>;
  const arrowDown = <>&#x2193;</>;
  const arrowUp = <>&#x2191;</>;

  const icon = () => {
    if (thState === 1) {
      return arrowDown;
    } if (thState === -1) {
      return arrowUp;
    } return arrowUns;
  };

  const handleClick = () => {
    if (thState === none) {
      setThState(asc);
      doSort();
    } if (thState === asc) {
      setThState(desc);
    } if (thState === desc) {
      setThState(none);
    }
  };

  return (
    <>
      <th
        onClick={handleClick}
      >
        {thTitle}
        <span>{icon}</span>
      </th>
    </>
  );
};

export default SortableTH;
