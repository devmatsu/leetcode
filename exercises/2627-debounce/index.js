/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
export const debounce = (fn, t) => {
  let ref;
  return (...args) => {
    if (ref) clearTimeout(ref);

    ref = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
* const log = debounce(console.log, 100);
* log('Hello'); // cancelled
* log('Hello'); // cancelled
* log('Hello'); // Logged at t=100ms
*/
