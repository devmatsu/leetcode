import { sleep } from './index';

describe('sleep function', () => {
  it('should wait 100ms to execute', async () => {
    const millis = 100;
    const t = Date.now();
    await sleep(millis);
    const elapsedTime = Date.now() - t;
    expect(elapsedTime).toBeGreaterThanOrEqual(millis);
  });

  it('should wait 200ms to execute', async () => {
    const millis = 200;
    const t = Date.now();
    await sleep(millis);
    const elapsedTime = Date.now() - t;
    expect(elapsedTime).toBeGreaterThanOrEqual(millis);
  });
});
