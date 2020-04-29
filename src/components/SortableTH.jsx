import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({ doSort, thTitle }) => {
  const initialThState = null;
  const [thState, setThState] = useState(initialThState);

  const asc = 'asc';
  const desc = 'desc';
  const none = null;
  // const arrowUns = <>&#x2195;</>;
  // const arrowDown = <>&#x2193;</>;
  // const arrowUp = <>&#x2191;</>;

  // const icon = () => {
  //   if (thState === 1) {
  //     return arrowDown;
  //   } if (thState === -1) {
  //     return arrowUp;
  //   } return arrowUns;
  // };

  const handleClick = () => {
    if (thState === none) {
      setThState(asc);
      doSort();
    } if (thState === asc) {
      setThState(desc);
      doSort();
    } if (thState === desc) {
      setThState(none);
      doSort();
    }
  };

  return (
    <>
      <th
        onClick={handleClick}
      >
        {thTitle}
        {/* <span>{icon}</span> */}
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
  thTitle: PropTypes.string,
};

export default SortableTH;
