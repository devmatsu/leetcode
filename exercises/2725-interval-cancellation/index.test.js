import { jest } from '@jest/globals';
import { cancellable } from './index';

jest.useFakeTimers();

describe('cancellable function', () => {
  test('Example 1: fn = (x) => x * 2, args = [4], t = 35', () => {
    const fn = jest.fn((x) => x * 2);
    const args = [4];
    const t = 35;
    const cancelTimeMs = 190;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(cancelTimeMs);

    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn.mock.calls).toEqual([[4], [4], [4], [4], [4], [4]]);
  });

  test('Example 2: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30', () => {
    const fn = jest.fn((x1, x2) => (x1 * x2));
    const args = [2, 5];
    const t = 30;
    const cancelTimeMs = 165;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(cancelTimeMs);

    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn.mock.calls).toEqual([[2, 5], [2, 5], [2, 5], [2, 5], [2, 5], [2, 5]]);
  });

  test('Example 3: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50', () => {
    const fn = jest.fn((x1, x2, x3) => (x1 + x2 + x3));
    const args = [5, 1, 3];
    const t = 50;
    const cancelTimeMs = 180;

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(cancelTimeMs);

    expect(fn).toHaveBeenCalledTimes(4);
    expect(fn.mock.calls).toEqual([[5, 1, 3], [5, 1, 3], [5, 1, 3], [5, 1, 3]]);
  });
});
