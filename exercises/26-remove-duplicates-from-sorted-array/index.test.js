import { removeDuplicates } from './index';

test('removeDuplicates should return the length of the modified nums array and ensure its content matches the expected values', () => {
  const nums = [1, 1, 2];
  const expectedNums = [1, 2];

  const k = removeDuplicates(nums);

  expect(removeDuplicates(nums)).toEqual(expectedNums.length);

  nums.slice(0, k).forEach((num, index) => {
    expect(num).toEqual(expectedNums[index]);
  });
});
