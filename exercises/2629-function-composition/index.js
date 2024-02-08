/**
 * @param {Function[]} functions
 * @return {Function}
 */

export const compose = (functions) => (x) => {
  let result = x;
  functions.reverse();
  functions.forEach((func) => {
    result = func(result);
  });
  return result;
};
