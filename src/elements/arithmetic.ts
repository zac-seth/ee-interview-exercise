import { NumericFunction } from './function';

export const add: NumericFunction = (a, b) => a + b;

export const subtract: NumericFunction = (a, b) => a - b;

export const multiply: NumericFunction = (a, b) => a * b;

export const divide: NumericFunction = (a, b) => {
  if (b === 0) {
    throw new Error(`You can't divide by zero, fool!`);
  }

  return a / b;
};
