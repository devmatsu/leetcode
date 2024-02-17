import { timeLimit } from './index';

test('resolves if function completes within time limit', async () => {
  const quickFunction = () => new Promise((resolve) => { setTimeout(() => resolve('completed'), 10); });
  const limitedFunction = timeLimit(quickFunction, 100);
  await expect(limitedFunction()).resolves.toBe('completed');
});

test('rejects if function exceeds time limit', async () => {
  const slowFunction = () => new Promise((resolve) => { setTimeout(() => resolve('too slow'), 200); });
  const limitedFunction = timeLimit(slowFunction, 100);
  await expect(limitedFunction()).rejects.toBe('Time Limit Exceeded');
});

test('rejects if the function throws an error', async () => {
  const errorFunction = () => new Promise((_, reject) => { setTimeout(() => reject(new Error('Error occurred')), 10); });
  const limitedFunction = timeLimit(errorFunction, 100);
  await expect(limitedFunction()).rejects.toThrow('Error occurred');
});
