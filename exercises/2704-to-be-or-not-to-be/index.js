/**
 * @param {string} val
 * @return {Object}
 */

export const expect = (val) => ({
  toBe: (val2) => val === val2 || (() => { throw new Error('Not Equal'); })(),
  notToBe: (val2) => val !== val2 || (() => { throw new Error('Equal'); })(),
});

export const expectV1 = (expectVal) => ({
  toBe: (val) => {
    if (expectVal === val) return true;
    throw new Error('Not Equal');
  },
  notToBe: (val) => {
    if (expectVal !== val) return true;
    throw new Error('Equal');
  },
});
