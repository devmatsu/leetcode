/* eslint-disable no-extend-native */
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  const map = new Map();

  for (let i = 0; i < this.length; i += 1) {
    const key = fn(this[i]);
    if (map.has(key)) {
      map.get(key).push(this[i]);
    } else {
      map.set(key, [this[i]]);
    }
  }

  return Object.fromEntries(map);
};

/**
* [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
*/
