import { once } from './index';

describe('Function that return value only once', () => {
  it('should return the calculated value for the first call and undefined thereafter', () => {
    const fn = (a, b, c) => (a + b + c);
    const onceFn = once(fn);
    expect(onceFn(1, 2, 3)).toEqual(6);
    expect(onceFn(3, 4, 6)).toEqual(undefined);
  });

  it('should return undefined for subsequent calls with the same arguments', () => {
    const fn = (a, b, c) => (a + b + c);
    const onceFn = once(fn);
    expect(onceFn(1, 2, 3)).toEqual(6);
    expect(onceFn(1, 2, 3)).toEqual(undefined);
  });

  it('should return undefined for subsequent calls on the same instance, but work again for new instances', () => {
    const fn = (a, b, c) => (a + b + c);
    const firstFn = once(fn);
    expect(firstFn(5, 6, 7)).toEqual(18);
    expect(firstFn(7, 8, 9)).toEqual(undefined);

    const secondFn = once(fn);
    expect(secondFn(10, 20, 30)).toEqual(60);
    expect(secondFn(50, 60, 70)).toEqual(undefined);
  });

  it('should return undefined for subsequent calls after the initial call with multiplication', () => {
    const fn = (a, b, c) => (a * b * c);
    const onceFn = once(fn);
    expect(onceFn(5, 2, 10)).toEqual(100);
    expect(onceFn(2, 2, 2)).toEqual(undefined);
  });

  it('should return undefined for subsequent calls on the same instance with multiplication, but work again for new instances', () => {
    const fn = (a, b, c) => (a * b * c);
    const firstFn = once(fn);
    expect(firstFn(10, 10, 2)).toEqual(200);
    expect(firstFn(10, 20, 30)).toEqual(undefined);

    const secondFn = once(fn);
    expect(secondFn(10, 20, 30)).toEqual(6000);
    expect(secondFn(40, 50, 60)).toEqual(undefined);
  });
});
