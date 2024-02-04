/**
 * @param {number} n
 * @return {Function} counter
 */

export const createCounter = (n) => {
  let increment = -1;

  return () => {
    increment += 1;
    return n + increment;
  };
};

/**
* const counter = createCounter(10)
* counter() // 10
* counter() // 11
* counter() // 12
*/
