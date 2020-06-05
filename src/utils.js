import { every, values, isEmpty } from 'lodash';

/**
 * Returns true if all of errorsObj's arrays are empty
 * @param {{}} errorsObj
 */
const isValid = errorsObj => {
  // see documentation for values
  // it ignores object keys and creates a new array with object's values
  const allArrays = values(errorsObj);

  // every will return true if all array element satisfy the condition
  // isEmpty will return true if array is undefined or empty
  const checking = every(allArrays, err => isEmpty(err));
  return checking;
};
export default isValid;
