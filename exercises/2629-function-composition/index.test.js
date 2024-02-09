import { compose } from './index';

describe('Compose function', () => {
  it('should correctly compose functions for the first test case', () => {
    const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
    const x = 4;
    expect(compose(functions)(x)).toEqual(65);
  });

  it('should correctly compose functions for the second test case', () => {
    const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    const x = 1;
    expect(compose(functions)(x)).toEqual(1000);
  });

  it('should return the input value for an empty array of functions', () => {
    const functions = [];
    const x = 42;
    expect(compose(functions)(x)).toEqual(42);
  });
});
