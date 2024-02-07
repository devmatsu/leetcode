import { map } from './index';

describe('Simulate map function', () => {
  it('should return a modified array by adding 1 to each element through the plusOne function', () => {
    const arr = [1, 2, 3];
    const plusOne = (n) => n + 1;

    const newArray = map(arr, plusOne);

    expect(newArray).toEqual([2, 3, 4]);
  });

  it('should return a modified array with the constant value of 42', () => {
    const arr = [10, 20, 30];
    const constant = () => 42;

    const newArray = map(arr, constant);

    expect(newArray).toEqual([42, 42, 42]);
  });

  it('should return a modified array by adding the index to each element', () => {
    const arr = [1, 2, 3];
    const plusI = (n, i) => n + i;

    const newArray = map(arr, plusI);

    expect(newArray).toEqual([1, 3, 5]);
  });
});
