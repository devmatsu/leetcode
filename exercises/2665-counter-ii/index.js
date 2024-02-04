/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

export const createCounter = (init) => {
  let variableValue = init;

  return {
    increment: () => {
      variableValue += 1;
      return variableValue;
    },
    decrement: () => {
      variableValue -= 1;
      return variableValue;
    },
    reset: () => {
      variableValue = init;
      return variableValue;
    },
  };
};
