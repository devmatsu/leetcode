import { reduce } from './index';

describe('Simulate reduce function', () => {
  const sumReducer = (accum, curr) => accum + curr;

  it('should sum all the numbers in the array', () => {
    const init = 0;
    const nums = [1, 2, 3, 4];

    expect(reduce(nums, sumReducer, init)).toEqual(10);
  });

  it('should do nothing and return init value for an empty array', () => {
    const init = 25;
    const nums = [];

    expect(reduce(nums, sumReducer, init)).toEqual(25);
  });

  it('should calculate the sum of squares', () => {
    const init = 100;
    const nums = [1, 2, 3, 4];
    const squareSumReducer = (accum, curr) => accum + curr * curr;

    expect(reduce(nums, squareSumReducer, init)).toEqual(130);
  });

  it('should calculate the product of elements in the array', () => {
    const init = 1;
    const nums = [1, 2, 3, 4];
    const productReducer = (accum, curr) => accum * curr;

    expect(reduce(nums, productReducer, init)).toEqual(24);
  });
});
