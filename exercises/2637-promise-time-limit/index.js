/* eslint-disable no-async-promise-executor */
/* eslint-disable prefer-promise-reject-errors */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

export const timeLimit = (fn, t) => (...args) => new Promise(async (resolve, reject) => {
  const id = setTimeout(() => reject('Time Limit Exceeded'), t);

  try {
    const res = await fn(...args);
    resolve(res);
  } catch (err) {
    reject(err);
  }

  clearTimeout(id);
});
