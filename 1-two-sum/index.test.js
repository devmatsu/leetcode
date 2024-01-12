import { twoSum } from './index.js';

test('twoSum returns the correct indices for a valid target', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('twoSum returns the correct indices for a valid target even if the target exists in the array', () => {
  const nums = [2, 7, 11, 15, 9];
  const target = 9;
  expect(twoSum(nums, target)).toEqual([0, 1]);
});

test('twoSum returns an empty array for an invalid target', () => {
  const nums = [2, 7, 11, 15];
  const target = 100;
  expect(twoSum(nums, target)).toEqual([]);
});

test('twoSum returns the correct indices for a specific target with duplicate numbers', () => {
  const nums = [3, 3];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
})

test('twoSum returns the correct indices for a specific target with duplicate numbers even if the target exists in the array', () => {
  const nums = [3, 3, 6];
  const target = 6;
  expect(twoSum(nums, target)).toEqual([0, 1]);
})

test('twoSum returns the correct indices for a specific target with duplicate numbers and zero sum', () => {
  const nums = [0, 3, 2, 1, 0];
  const target = 0;
  expect(twoSum(nums, target)).toEqual([0, 4]);
})

test('twoSum returns the correct indices for a specific target with negative sum', () => {
  const nums = [-10, -1, -18, -50];
  const target = -19;
  expect(twoSum(nums, target)).toEqual([1, 2]);
})

test('twoSum returns the correct indices for a specific target with negative sum even if target exists in the array', () => {
  const nums = [-10, -1, -18, -19];
  const target = -19;
  expect(twoSum(nums, target)).toEqual([1, 2]);
})
