import { TimeLimitedCache } from './index';

describe('TimeLimitedCache', () => {
  let cache;

  beforeEach(() => {
    cache = new TimeLimitedCache();
  });

  test('should return false when adding a new key', () => {
    expect(cache.set(1, 42, 100)).toBe(false);
  });

  test('should return true when overwriting an unexpired key', () => {
    cache.set(1, 42, 100);
    expect(cache.set(1, 43, 100)).toBe(true);
  });

  test('should return the correct value for an existing key', () => {
    cache.set(1, 99, 100);
    expect(cache.get(1)).toBe(99);
  });

  test('should return -1 for an expired key', async () => {
    cache.set(1, 123, 50);
    await new Promise((resolve) => { setTimeout(resolve, 70); });
    expect(cache.get(1)).toBe(-1);
  });

  test('should count only non-expired keys', async () => {
    cache.set(1, 'a', 50);
    cache.set(2, 'b', 100);
    cache.set(3, 'c', 150);

    await new Promise((resolve) => { setTimeout(resolve, 80); });
    expect(cache.count()).toBe(2);
  });
});
