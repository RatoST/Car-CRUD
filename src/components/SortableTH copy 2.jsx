import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({ doSort, doSortUns, setThTitle }) => {
  const asc = 'asc';
  const desc = 'desc';
  const none = null;
  const thTitle = setThTitle;
  const arrowUns = <>&#x2195;</>;
  const arrowDown = <>&#x2193;</>;
  const arrowUp = <>&#x2191;</>;

  const [thState, setThState] = useState(none);
  const [iconState, setIconState] = useState(arrowUns);

  const iconBeh = () => {
    const getIcon = () => {
      if (thState === asc) {
        return arrowDown;
      } if (thState === desc) {
        return arrowUp;
      } return arrowUns;
    };
    setIconState(getIcon);
  };

  const handleClick = () => {
    if (thState === none) {
      setThState(asc);
    } if (thState === asc) {
      setThState(desc);
    } if (thState === desc) {
      setThState(asc);
    }
  };

  const doSortClick = () => {
    if (thState === asc) {
      doSort(thTitle, thState);
    } if (thState === desc) {
      doSort(thTitle, thState);
    } return doSort(thTitle, thState);
  };

  const clickHandle = () => {
    handleClick();
    doSortClick();
    iconBeh();
  };

  return (
    <>
      <th
        onClick={clickHandle}
      >
        {thTitle}
        <span>{iconState}</span>
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
  doSortUns: PropTypes.func,
  setThTitle: PropTypes.string,
};

export default SortableTH;
