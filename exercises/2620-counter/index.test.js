import { createCounter } from './index';

test('Should return the initial value (10) and sum 1 incrementally', () => {
  const n = 10;
  const counter = createCounter(n);

  expect(counter()).toEqual(n);
  expect(counter()).toEqual(n + 1);
  expect(counter()).toEqual(n + 2);
  expect(counter()).toEqual(n + 3);
});

test('Should return the initial negative value (-1) and sum 1 incrementally', () => {
  const n = -1;
  const counter = createCounter(n);

  expect(counter()).toEqual(n);
  expect(counter()).toEqual(n + 1);
  expect(counter()).toEqual(n + 2);
  expect(counter()).toEqual(n + 3);
});

test('Should return the initial zero value (0) and sum 1 incrementally', () => {
  const n = 0;
  const counter = createCounter(n);

  expect(counter()).toEqual(n);
  expect(counter()).toEqual(n + 1);
  expect(counter()).toEqual(n + 2);
  expect(counter()).toEqual(n + 3);
});
