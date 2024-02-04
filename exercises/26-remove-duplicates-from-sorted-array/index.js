/* eslint-disable no-param-reassign */
export const removeDuplicates = (nums) => {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0;
  for (let i = 1; i < nums.length; i += 1) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex += 1;
      nums[uniqueIndex] = nums[i];
    }
  }

  return uniqueIndex + 1;
};
