import { expect as expectFunc } from './index';

const callFuncToBe = (expect, toBe) => {
  try {
    const response = expectFunc(expect).toBe(toBe);
    if (response) return { value: true };
  } catch (error) {
    return { error: error.message };
  }
  return {};
};

const callFuncNotToBe = (expect, notToBe) => {
  try {
    const response = expectFunc(expect).notToBe(notToBe);
    if (response) return { value: true };
  } catch (error) {
    return { error: error.message };
  }
  return {};
};

test('Should return a object with value true with toBe function', () => {
  const response = callFuncToBe(5, 5);
  expect(response).toEqual({ value: true });
});

test('Should return a object with error with string "not equal"', () => {
  const response = callFuncToBe(5, 10);
  expect(response).toEqual({ error: 'Not Equal' });
});

test('Should return a object with value true with notToBe function', () => {
  const response = callFuncNotToBe(5, 25);
  expect(response).toEqual({ value: true });
});

test('Should return a object with value true with notToBe function passing the second arg as null', () => {
  const response = callFuncNotToBe(5, null);
  expect(response).toEqual({ value: true });
});

test('Should return a object with error with string "not equal" with notToBe function', () => {
  const response = callFuncNotToBe(5, 5);
  expect(response).toEqual({ error: 'Equal' });
});
