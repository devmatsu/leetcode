/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

export const map = (arr, fn) => {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result.push(fn(arr[i], i));
  }

  return result;
};
