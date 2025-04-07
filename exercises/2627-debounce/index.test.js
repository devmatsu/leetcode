import {
  jest, describe, it, expect, beforeEach,
} from '@jest/globals';
import { debounce } from './index';

describe('debounce', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllTimers();
  });

  it('should debounce multiple quick calls and only call once', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced('a');
    debounced('b');
    debounced('c');

    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('c');
  });

  it('should not call the function if delay has not passed', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 100);

    debounced('hello');

    jest.advanceTimersByTime(50);

    expect(fn).not.toHaveBeenCalled();
  });

  it('should call the function after the delay', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 200);

    debounced('ok');
    jest.advanceTimersByTime(200);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('ok');
  });
});
