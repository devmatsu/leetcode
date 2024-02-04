/**
 * @param {number[]} nums
 * @return {number}
*/

export const firstMissingPositive = (nums) => {
  let smallestNumber = 1;
  const numsObj = new Set(nums);

  while (numsObj.has(smallestNumber)) {
    smallestNumber += 1;
  }

  return smallestNumber;
};
