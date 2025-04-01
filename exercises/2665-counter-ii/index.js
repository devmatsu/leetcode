/* eslint-disable no-return-assign */
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

export const createCounter = (init) => {
  let counter = init;
  return {
    increment: () => (counter += 1),
    decrement: () => (counter -= 1),
    reset: () => (counter = init),
  };
};
