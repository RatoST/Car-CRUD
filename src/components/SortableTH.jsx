import React from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({
  doSort, handleState, setThTitle, sortOrder,
}) => {
  const thTitle = setThTitle;
  const arrowUns = <>&#x2195;</>;
  const arrowDown = <>&#x2193;</>;
  const arrowUp = <>&#x2191;</>;

  const clickHandle = () => {
    handleState();
    doSort(thTitle);
  };

  return (
    <>
      <th
        onClick={clickHandle}
        className="sortPointer"
      >
        {thTitle}
        {sortOrder === null && <span className="sortIcon">{arrowUns}</span>}
        {sortOrder === 'asc' && <span>{arrowDown}</span>}
        {sortOrder === 'desc' && <span>{arrowUp}</span>}
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
  sortOrder: PropTypes.string,
  handleState: PropTypes.func,
  setThTitle: PropTypes.string,
};

export default SortableTH;
