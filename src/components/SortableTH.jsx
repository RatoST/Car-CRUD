import React from 'react';
import PropTypes from 'prop-types';

const SortableTH = ({
  ASC, DESC, doSort, handleState, sortAttribute, sortOrder, title, NONE,
}) => {
  const clickHandle = () => {
    doSort(title);
    handleState();
  };

  return (
    <>
      <th
        onClick={clickHandle}
        className="sortPointer"
      >
        {title}
        {(sortOrder === NONE && <span className="sortIcon">&#x2195;</span>)}
        {sortAttribute === title && (sortOrder === ASC && <span>&#x2193;</span>)}
        {sortAttribute === title && (sortOrder === DESC && <span>&#x2191;</span>)}
      </th>
    </>
  );
};

SortableTH.propTypes = {
  ASC: PropTypes.string,
  DESC: PropTypes.string,
  doSort: PropTypes.func,
  handleState: PropTypes.func,
  NONE: PropTypes.string,
  sortAttribute: PropTypes.string,
  sortOrder: PropTypes.string,
  title: PropTypes.string,
};

export default SortableTH;
