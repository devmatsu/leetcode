/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
export const promiseAll = (functions) => new Promise((resolve, reject) => {
  const promises = functions.map((fn) => fn());
  Promise.all(promises).then(resolve).catch(reject);
});

export const promiseAllV1 = (functions) => new Promise((resolve, reject) => {
  try {
    const promises = functions.map((fn) => fn());
    const result = Promise.all(promises);
    resolve(result);
  } catch (err) {
    reject(err);
  }
});

/**
* const promise = promiseAll([() => new Promise(res => res(42))])
* promise.then(console.log); // [42]
*/
