/**
 * @param {Function} fn
 * @return {Function}
 */

export const once = (fn) => {
  let flagOnce = false;
  return (...args) => {
    if (flagOnce) return undefined;
    flagOnce = true;
    return fn(...args);
  };
};
