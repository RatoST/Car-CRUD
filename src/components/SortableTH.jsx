import React from 'react';
import PropTypes from 'prop-types';

const NONE = 'NONE';
const ASC = 'asc';
const DESC = 'desc';

const SortableTH = ({
  doSort, sortAttribute, sortOrder, title,
}) => {
  const clickHandle = () => {
    doSort(title);
  };

  return (
    <>
      <th
        className="sortPointer"
        onClick={clickHandle}
      >
        {title}
        {(sortOrder === NONE && <span className="sortIcon">&#x2195;</span>)}
        {sortAttribute === title && (sortOrder === ASC && <span>&#x2191;</span>)}
        {sortAttribute === title && (sortOrder === DESC && <span>&#x2193;</span>)}
      </th>
    </>
  );
};

SortableTH.propTypes = {
  doSort: PropTypes.func,
  sortAttribute: PropTypes.string,
  sortOrder: PropTypes.string,
  title: PropTypes.string,
};

export default SortableTH;
export { ASC, DESC, NONE };
