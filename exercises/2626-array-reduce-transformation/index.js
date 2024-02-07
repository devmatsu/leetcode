/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

export const reduce = (nums, fn, init) => {
  if (nums.length === 0) return init;

  let response = init;
  for (let i = 0; i < nums.length; i += 1) {
    response = fn(response, nums[i]);
  }

  return response;
};
