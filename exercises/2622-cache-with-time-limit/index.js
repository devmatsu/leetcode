/* eslint-disable func-names */
export const TimeLimitedCache = function () {
  this.cache = new Map();
};

/**
* @param {number} key
* @param {number} value
* @param {number} duration time until expiration in ms
* @return {boolean} if un-expired key already existed
*/
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existKey = this.cache.has(key);
  if (existKey) {
    clearTimeout(this.cache.get(key).setTimeoutId);
  }

  this.cache.set(key, {
    value,
    setTimeoutId: setTimeout(() => {
      this.cache.delete(key);
    }, duration),
  });
  return existKey;
};

/**
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }

  return -1;
};

/**
* @return {number} count of non-expired keys
*/
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

/**
* const timeLimitedCache = new TimeLimitedCache()
* timeLimitedCache.set(1, 42, 1000); // false
* timeLimitedCache.get(1) // 42
* timeLimitedCache.count() // 1
*/
