/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

export const flat = (arr, n) => {
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    const elm = arr[i];
    if (Array.isArray(elm) && n > 0) {
      const flattened = flat(elm, n - 1);
      result.push(...flattened);
    } else {
      result.push(elm);
    }
  }

  return result;
};
