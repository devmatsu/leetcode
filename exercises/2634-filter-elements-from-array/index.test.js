import { filter } from './index';

describe('Filtering an Array with a Single Parameter Function', () => {
  it('should return a modified array by filtering out elements greater than 10', () => {
    const arr = [0, 10, 20, 30];
    const greaterThan10 = (n) => n > 10;

    const newArray = filter(arr, greaterThan10);

    expect(newArray).toEqual([20, 30]);
  });

  it('should return a modified array with falsey values (such as 0) filtered out', () => {
    const arr = [-2, -1, 0, 1, 2];
    const plusOne = (n) => n + 1;

    const newArray = filter(arr, plusOne);

    expect(newArray).toEqual([-2, 0, 1, 2]);
  });
});

describe('Filtering an Array with a Two-Parameter Function', () => {
  it('should return a modified array that gets only the first index', () => {
    const arr = [1, 2, 3];
    const firstIndex = (n, i) => i === 0;

    const newArray = filter(arr, firstIndex);
    expect(newArray).toEqual([1]);
  });
});
