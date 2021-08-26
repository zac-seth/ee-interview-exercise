import { curry, NumericFunction } from './function';

const numberFunc: NumericFunction = (a, b) => a + b;

describe(`function`, () => {
  it(`Should correctly curry the given function`, () => {
    expect(curry(numberFunc)(1)(3)).toEqual(numberFunc(1, 3));
  });
});
