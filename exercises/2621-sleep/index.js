/**
 * @param {number} millis
 * @return {Promise}
 */

export const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});
