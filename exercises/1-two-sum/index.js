export const twoSum = (nums, target) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i += 1) {
    const complement = target - nums[i];
    if (Object.prototype.hasOwnProperty.call(hashMap, complement)) {
      return [hashMap[complement], i];
    }
    hashMap[nums[i]] = i;
  }

  return [];
};

export const twoSumV1 = (nums, target) => {
  const result = [];
  let nTargetSum = 0;

  const arr = nums.map((elm, index) => ({
    index,
    item: elm,
    used: false,
  })).sort((a, b) => (target > 0 ? b.item - a.item : a.item - b.item));

  if (target !== 0) {
    arr.forEach((elm) => {
      if (!elm.used
              && ((target > 0 && !((elm.item + nTargetSum) > target))
              || (target < 0 && !((elm.item + nTargetSum) < target)))) {
        // eslint-disable-next-line no-param-reassign
        elm.used = true;
        nTargetSum += elm.item;
        result.push(elm.index);
      }
    });
  } else {
    let findExactValue = arr.filter((elm) => elm.item === target);
    if (findExactValue.length > 0) {
      findExactValue.forEach((elm) => {
        result.push(elm.index);
      });
    } else {
      arr.forEach((elm) => {
        const x = -(elm.item);
        findExactValue = arr.filter((element) => element.item === x);
        if (!elm.used && findExactValue.length > 0) {
          // eslint-disable-next-line no-param-reassign
          elm.used = true;
          findExactValue[0].used = true;
          result.push(elm.index, findExactValue[0].index);
        }
      });
    }
  }

  return result.sort();
};
