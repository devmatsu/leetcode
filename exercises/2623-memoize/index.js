/* eslint-disable no-prototype-builtins */
/**
 * @param {Function} fn
 * @return {Function}
 */

export const memoize = (fn) => {
  const cacheResult = {};
  const cacheExecution = {};

  return (...args) => {
    const key = args.join('-');

    if (cacheResult.hasOwnProperty(key)) {
      cacheExecution[key] += 1;
      return cacheResult[key];
    }

    const result = fn(...args);
    cacheResult[key] = result;
    cacheExecution[key] = 1;

    return result;
  };
};

export function memoizeV1(fn) {
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
