/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
export const isEmpty = (obj) => {
  const keys = Object.keys(obj);
  if (keys.length > 0) return false;
  return true;
};
