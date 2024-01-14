export const removeDuplicates = (nums) => {
  nums = [...new Set(nums)];

  return nums.length;
};
