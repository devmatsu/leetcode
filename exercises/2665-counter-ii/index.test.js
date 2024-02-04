import { createCounter } from './index';

describe('Counter', () => {
  let counter;

  beforeEach(() => {
    counter = createCounter(10);
  });

  test('increment() should increase the value by 1', () => {
    expect(counter.increment()).toEqual(11);
  });

  test('reset() should reset the value to its initial state', () => {
    expect(counter.reset()).toEqual(10);
  });

  test('decrement() should decrease the value by 1', () => {
    expect(counter.decrement()).toEqual(9);
  });

  test('increment() twice should increase the value by 2', () => {
    counter.increment();
    const result = counter.increment();
    expect(result).toEqual(12);
  });

  test('decrement() and reset() in order should return to the initial state', () => {
    counter.decrement();
    const result = counter.reset();
    expect(result).toEqual(10);
  });
});
