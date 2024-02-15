import { cancellable } from './index';

describe('cancellable function', () => {
  it('should execute function if not canceled before timeout', async () => {
    const fn = (x) => x * 5;
    const args = [2];
    const t = 20;
    const cancelTimeMs = 50;

    const results = [];
    const cancelFn = cancellable((...innerArgs) => {
      results.push({ time: t, returned: fn(...innerArgs) });
    }, args, t);

    await new Promise((resolve) => { setTimeout(resolve, cancelTimeMs); });

    cancelFn();

    await new Promise((resolve) => { setTimeout(resolve, t + 10); });

    expect(results).toEqual([{ time: t, returned: 10 }]);
  });

  it('should not execute function if canceled before timeout', async () => {
    const fn = (x) => x ** 2;
    const args = [2];
    const t = 100;
    const cancelTimeMs = 50;

    const results = [];
    const cancelFn = cancellable((...innerArgs) => {
      results.push({ time: t, returned: fn(...innerArgs) });
    }, args, t);

    await new Promise((resolve) => { setTimeout(resolve, cancelTimeMs); });

    cancelFn();

    await new Promise((resolve) => { setTimeout(resolve, t + 10); });

    expect(results).toEqual([]);
  });

  it('should execute function if not canceled before timeout (second case)', async () => {
    const fn = (x1, x2) => x1 * x2;
    const args = [2, 4];
    const t = 30;
    const cancelTimeMs = 100;

    const results = [];
    const cancelFn = cancellable((...innerArgs) => {
      results.push({ time: t, returned: fn(...innerArgs) });
    }, args, t);

    await new Promise((resolve) => { setTimeout(resolve, cancelTimeMs); });

    cancelFn();

    await new Promise((resolve) => { setTimeout(resolve, t + 10); });

    expect(results).toEqual([{ time: t, returned: 8 }]);
  });
});
