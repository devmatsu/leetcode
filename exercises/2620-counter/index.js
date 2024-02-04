/**
 * @param {number} n
 * @return {Function} counter
 */

export const createCounter = (n) => {
  let count = n - 1;

  return () => {
    count += 1;
    return count;
  };
};

// First version
export const createCounterV1 = (n) => {
  let increment = -1;

  return () => {
    increment += 1;
    return n + increment;
  };
};
