import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({ doSort }) => {
  const asc = 1;
  const desc = -1;
  const none = null;
  const thTitle = 'Brand';

  const initialThState = none;
  const [thState, setThState] = useState(initialThState);

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
    } if (thState === asc) {
      setThState(desc);
    } if (thState === desc) {
      setThState(none);
    }
  };

  const doSortClick = () => {
    if (thState === asc) {
      doSort();
    } if (thState === desc) {
      doSort();
    } if (thState === none) {
      doSort();
    }
  };

  const clickHandle = () => {
    handleClick();
    doSortClick();
  };

  return (
    <>
      <th
        onClick={clickHandle}
      >
        {thTitle}
        {/* <span>{icon}</span> */}
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
};

export default SortableTH;
