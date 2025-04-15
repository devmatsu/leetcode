/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
export const sortBy = (arr, fn) => arr.sort((a, b) => fn(a) - fn(b));
