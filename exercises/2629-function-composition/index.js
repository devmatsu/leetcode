/**
 * @param {Function[]} functions
 * @return {Function}
 */

export const compose = (functions) => (x) => {
  if (functions.length === 0) return x;
  return functions.reduceRight((acc, fn) => fn(acc), x);
};

export const composeV1 = (functions) => (x) => {
  let result = x;
  functions.reverse();
  functions.forEach((func) => {
    result = func(result);
  });
  return result;
};
