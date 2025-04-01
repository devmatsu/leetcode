/**
 * @param {string} s
 * @return {number}
 */

export const maxPower = (s) => {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 1; i < s.length; i += 1) {
    if (s[i] === s[i - 1]) {
      currentCount += 1;
    } else {
      currentCount = 1;
    }
    maxCount = Math.max(maxCount, currentCount);
  }

  return maxCount;
};
