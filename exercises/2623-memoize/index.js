/* eslint-disable no-prototype-builtins */
/**
 * @param {Function} fn
 * @return {Function}
 */

export const memoize = (fn) => {
  const cacheResult = {};
  let callCount = 0;

  const memoizedFn = (...args) => {
    const key = args.join('-');

    if (!cacheResult.hasOwnProperty(key)) {
      cacheResult[key] = fn(...args);
      callCount += 1;
    }

    return cacheResult[key];
  };

  memoizedFn.getCallCount = () => callCount;

  return memoizedFn;
};

export const memoizeV2 = (fn) => {
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

export const memoizeV1 = (fn) => {
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
};
