import { maxPower } from './index';

test('Should return 2 for "leetcode"', () => {
  const s = 'leetcode';
  const result = maxPower(s);
  expect(result).toEqual(2);
});

test('Should return 5 for "abbcccddddeeeeedcba"', () => {
  const s = 'abbcccddddeeeeedcba';
  const result = maxPower(s);
  expect(result).toEqual(5);
});

test('Should return 1 for single character "a"', () => {
  const s = 'a';
  const result = maxPower(s);
  expect(result).toEqual(1);
});

test('Should return 6 for all same characters "aaaaaa"', () => {
  const s = 'aaaaaa';
  const result = maxPower(s);
  expect(result).toEqual(6);
});

test('Should return 1 for alternating characters "abababab"', () => {
  const s = 'abababab';
  const result = maxPower(s);
  expect(result).toEqual(1);
});

test('Should return 6 for longest run in the middle "abbbbbbc"', () => {
  const s = 'abbbbbbc';
  const result = maxPower(s);
  expect(result).toEqual(6);
});

test('Should return 5 for longest run at the end "abcddddd"', () => {
  const s = 'abcddddd';
  const result = maxPower(s);
  expect(result).toEqual(5);
});

test('Should return 1 when no consecutive characters "abcdef"', () => {
  const s = 'abcdef';
  const result = maxPower(s);
  expect(result).toEqual(1);
});

test('Should return 500 for max input of 500 same letters', () => {
  const s = 'z'.repeat(500);
  const result = maxPower(s);
  expect(result).toEqual(500);
});
