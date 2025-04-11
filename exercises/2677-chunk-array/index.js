/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
export const chunk = (arr, size) => {
  if (arr.length === 0) return [];
  if (size > arr.length) return [arr];

  if (size === 1) {
    return arr.map((elm) => [elm]);
  }

  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};
