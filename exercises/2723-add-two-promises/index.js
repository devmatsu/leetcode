/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

export const addTwoPromises = async (promise1, promise2) => {
  const result = await Promise.allSettled([promise1, promise2]);
  const sum = result.reduce((acc, elm) => acc + elm.value, 0);
  return sum;
};
