/**
 * @param {string} val
 * @return {Object}
 */

export const expect = (expectVal) => ({
  toBe: (val) => {
    if (expectVal === val) return true;
    throw new Error('Not Equal');
  },
  notToBe: (val) => {
    if (expectVal !== val) return true;
    throw new Error('Equal');
  },
});
