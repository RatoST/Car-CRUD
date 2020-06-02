import { some } from 'lodash';

const isValid = (errors) => {
  const checking = some(errors, ve => ve);
  return checking;
};

export default isValid;
