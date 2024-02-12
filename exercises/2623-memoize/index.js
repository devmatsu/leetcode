/**
 * @param {Function} fn
 * @return {Function}
 */

export function memoize(fn) {
  const cache = [];

  return (...args) => {
    const argsExists = cache.find((item) => JSON.stringify(item.params) === JSON.stringify(args));
    if (argsExists) {
      argsExists.times += 1;
      return argsExists.result;
    }

    const result = fn(...args);
    cache.push({
      params: args,
      result,
      times: 1,
    });

    return result;
  };
}
