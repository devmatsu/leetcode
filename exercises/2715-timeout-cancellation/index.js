/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

export const cancellable = (fn, args, t) => {
  const timer = setTimeout(() => fn(...args), t);
  return () => clearTimeout(timer);
};
