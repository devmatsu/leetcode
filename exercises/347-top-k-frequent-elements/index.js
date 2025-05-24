/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

export const topKFrequent = (nums, k) => {
  const hm = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    if (hm.has(num)) {
      const currentNum = hm.get(num);
      hm.set(num, currentNum + 1);
    } else {
      hm.set(num, 1);
    }
  }

  const arr = [];
  hm.forEach((qty, key) => {
    arr.push({ key, qty });
  });

  arr.sort((a, b) => b.qty - a.qty);

  const result = arr.slice(0, k);
  return result.map((elm) => elm.key);
};
