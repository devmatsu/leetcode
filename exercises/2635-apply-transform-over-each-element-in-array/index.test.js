import { map } from './index';

describe('Test passing a function with one param or less', () => {
  it('Should return the modified array summing one through plusone function', () => {
    const arr = [1, 2, 3];
    const plusone = (n) => n + 1;

    const newArray = map(arr, plusone);

    expect(newArray).toEqual([2, 3, 4]);
  });

  it('Should return the modified array with the constant function', () => {
    const arr = [10, 20, 30];
    const constant = () => 42;

    const newArray = map(arr, constant);

    expect(newArray).toEqual([42, 42, 42]);
  });
});

describe('Test passing a function with two params', () => {
  it('Should return something', () => {
    const arr = [1, 2, 3];
    const plusI = (n, i) => n + i;

    const newArray = map(arr, plusI);
    expect(newArray).toEqual([1, 3, 5]);
  });
});
