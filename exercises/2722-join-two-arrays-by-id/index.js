/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

const deepMerge = (obj1, obj2) => ({ ...obj1, ...obj2 });

export const join = (arr1, arr2) => {
  const map = new Map();

  for (let i = 0; i < arr1.length; i += 1) {
    const { id } = arr1[i];
    const value = arr1[i];
    map.set(id, value);
  }

  for (let i = 0; i < arr2.length; i += 1) {
    const { id } = arr2[i].id;
    const value = arr2[i];
    if (map.has(id)) {
      const merged = deepMerge(map.get(id), value);
      map.set(id, merged);
    } else {
      map.set(id, value);
    }
  }

  return [...map.values()].sort((a, b) => a.id - b.id);
};
