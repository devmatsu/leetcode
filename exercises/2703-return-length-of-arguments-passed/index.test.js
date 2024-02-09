import { argumentsLength } from './index';

describe('Return length of arguments', () => {
  it('should return one argument', () => {
    const args = [5];
    expect(argumentsLength(...args)).toEqual(1);
  });

  it('should return five arguments', () => {
    const args = [5, 6, 7, 8, 9];
    expect(argumentsLength(...args)).toEqual(5);
  });

  it('should return three arguments even with different types', () => {
    const args = [{}, null, '3'];
    expect(argumentsLength(...args)).toEqual(3);
  });
});
