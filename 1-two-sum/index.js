export const twoSum = function(nums, target) {
  const result = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (result.hasOwnProperty(complement)) {
      return [result[complement], i];
    }
    result[nums[i]] = i;
  }
  return [];
};

export const twoSumV1 = function(nums, target) {
  const result = []
  let nTargetSum = 0;

  const arr = nums.map((elm, index) => {
      return {
          index: index,
          item: elm,
          used: false,
      }
  }).sort((a, b) => target > 0 ? b.item - a.item : a.item - b.item);

  if (target !== 0) {
      arr.forEach(elm => {
          console.log(`item: ${elm.item} | targetSum: ${nTargetSum}`);
          
          if (!elm.used &&
              (target > 0 && !((elm.item + nTargetSum) > target)) || 
              (target < 0 && !((elm.item + nTargetSum) < target)) ) {
              elm.used = true;
              nTargetSum += elm.item;
              result.push(elm.index);
          }
      })
  } else {
      const findExactValue = arr.filter(elm => elm.item === target);
      if (findExactValue.length > 0) {
          findExactValue.forEach(elm => {
              result.push(elm.index);
          }); 
      } else {
          arr.forEach(elm => {
              const x = -(elm.item);
              const findExactValue = arr.filter(elm => elm.item === x);
              if (!elm.used && findExactValue.length > 0) {
                  elm.used = true;
                  findExactValue[0].used = true;
                  result.push(elm.index, findExactValue[0].index);
              }
          })
      }
  }

  return result.sort();
}