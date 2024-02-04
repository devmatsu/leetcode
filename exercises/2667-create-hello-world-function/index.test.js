import { createHelloWorld } from './index';

test('Should return text \'Hello World\' ignoring the args', () => {
  const helloWorld = createHelloWorld();
  expect(helloWorld('123', 123, [], null)).toBe('Hello World');
});

test('Should return text \'Hello World\' even without any args being passed', () => {
  const helloWorld = createHelloWorld();
  expect(helloWorld()).toBe('Hello World');
});
