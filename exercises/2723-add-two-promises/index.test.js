import { addTwoPromises } from './index';

describe('addTwoPromises function', () => {
  it('should return the sum of two resolved promises', async () => {
    const promise1 = new Promise((resolve) => { setTimeout(() => resolve(2), 20); });
    const promise2 = new Promise((resolve) => { setTimeout(() => resolve(5), 60); });
    const result = await addTwoPromises(promise1, promise2);
    expect(result).toEqual(7);
  });

  it('should return the sum of two resolved promises with negative numbers', async () => {
    const promise1 = new Promise((resolve) => { setTimeout(() => resolve(10), 50); });
    const promise2 = new Promise((resolve) => { setTimeout(() => resolve(-12), 30); });
    const result = await addTwoPromises(promise1, promise2);
    expect(result).toEqual(-2);
  });
});
