import { memoize } from './index';

describe('memoize test cases for sum', () => {
  let memoizedSum;
  const sum = (a, b) => a + b;

  beforeEach(() => {
    memoizedSum = memoize(sum);
  });

  it('should return correct results with sum tests', () => {
    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(5, 5)).toBe(10);
    expect(memoizedSum(100, 100)).toBe(200);
  });

  it('should use cache for previously computed results', () => {
    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(5, 5)).toBe(10);
    expect(memoizedSum(100, 100)).toBe(200);
    expect(memoizedSum(5, 5)).toBe(10);
    expect(memoizedSum(2, 2)).toBe(4);
    expect(memoizedSum(100, 100)).toBe(200);

    expect(memoizedSum.getCallCount()).toBe(3);
  });
});

describe('memoize test cases for factorial', () => {
  let memoFactorial;
  const factorial = (n) => ((n <= 1) ? 1 : (n * factorial(n - 1)));

  beforeEach(() => {
    memoFactorial = memoize(factorial);
  });

  it('should return correct results for factorial', () => {
    expect(memoFactorial(2)).toBe(2);
    expect(memoFactorial(3)).toBe(6);
    expect(memoFactorial(4)).toBe(24);
  });

  it('should use cache for previously computed results', () => {
    memoFactorial(2);
    memoFactorial(3);
    memoFactorial(2);
    memoFactorial(3);

    expect(memoFactorial.getCallCount()).toBe(2);
  });
});

describe('memoize test cases for fibonacci', () => {
  let memoFib;
  const fib = (n) => {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
  };

  beforeEach(() => {
    memoFib = memoize(fib);
  });

  it('should return correct results for fibonacci sequence', () => {
    expect(memoFib(0)).toBe(0);
    expect(memoFib(1)).toBe(1);
    expect(memoFib(5)).toBe(5);
    expect(memoFib(10)).toBe(55);
  });

  it('should use cache for previously computed results in fibonacci sequence', () => {
    memoFib(5);
    memoFib(6);
    memoFib(5);
    memoFib(7);
    memoFib(5);

    expect(memoFib.getCallCount()).toBe(3);
  });
});
