/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

export const cancellable = (fn, args, t) => {
  fn(...args);
  const timer = setInterval(() => fn(...args), t);
  return () => {
    clearInterval(timer);
  };
};
