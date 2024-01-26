import { firstMissingPositive } from './index';

test('Should return the first missing positive integer from an array of consecutive positive numbers', () => {
  const nums = [1, 2, 3];
  expect(firstMissingPositive(nums)).toEqual(4);
});

test('Should return the first missing positive integer from an array with positive numbers in random order', () => {
  const nums = [1, 3, 6, 4, 1, 2];
  expect(firstMissingPositive(nums)).toEqual(5);
});

test('Should return 1 for an array containing only negative numbers', () => {
  const nums = [-1, -3];
  expect(firstMissingPositive(nums)).toEqual(1);
});

test('Should return 1 for an array containing a single positive number', () => {
  const nums = [7];
  expect(firstMissingPositive(nums)).toEqual(1);
});

test('Should return the smallest positive integer not present in the array', () => {
  const nums = [1];
  expect(firstMissingPositive(nums)).toEqual(2);
});
