import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({ doSort, setThTitle /*doSortUns*/ }) => {
  const asc = 'asc';
  const desc = 'desc';
  const none = null;
  const thTitle = setThTitle;
  const arrowUns = <>&#x2195;</>;
  const arrowDown = <>&#x2193;</>;
  const arrowUp = <>&#x2191;</>;

  const [thState, setThState] = useState(none);
  const [iconState, setIconState] = useState(arrowUns);

  console.log('initial state ' + thState);

  const iconBeh = () => {
    const getIcon = () => {
      if (thState === asc) {
        return arrowDown;
        console.log('getIcon state ' + thState);
      } if (thState === desc) {
        return arrowUp;
      } return arrowUns;
    };
    setIconState(getIcon);
    console.log('getIcon end state ' + thState);
  };

  const handleClick = () => {
    if (thState === none) {
      setThState(asc);
      console.log('hanCL st ' + thState);      
    } if (thState === asc) {
      setThState(desc);
      console.log('hanCl st2 ' + thState);
    } if (thState === desc) {
      setThState(asc);
      console.log('hanCl st3 ' + thState);
    }
  };

  const doSortClick = () => {
    if (thState === asc) {
      doSort(thTitle, thState);
      console.log('doSort s1 ' + thState);
    } if (thState === desc) {
      doSort(thTitle, thState);
      console.log('doSort s2 ' + thState);
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
        className="sortPointer"
      >
        {thTitle}
        <span>{iconState}</span>
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
  // doSortUns: PropTypes.func, not used at the moment
  setThTitle: PropTypes.string,
};

export default SortableTH;
