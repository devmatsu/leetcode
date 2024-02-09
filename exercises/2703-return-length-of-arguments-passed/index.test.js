import { argumentsLength } from './index';

describe('Counting the number of arguments', () => {
  it('should return the count of one argument', () => {
    const args = [5];
    expect(argumentsLength(...args)).toEqual(1);
  });

  it('should return the count of five arguments', () => {
    const args = [5, 6, 7, 8, 9];
    expect(argumentsLength(...args)).toEqual(5);
  });

  it('should return the count of three arguments with different types', () => {
    const args = [{}, null, '3'];
    expect(argumentsLength(...args)).toEqual(3);
  });
});
