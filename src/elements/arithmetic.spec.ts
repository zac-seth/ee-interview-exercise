import { add, divide, multiply, subtract } from './arithmetic';

describe(`numbers`, () => {
  describe(`add(a, b)`, () => {
    it(`Should correctly add two values`, () => {
      expect(add(1, 3)).toBe(4);
    });

    it(`Should correctly add negative values`, () => {
      expect(add(-1, -3)).toBe(-4);
    });
  });

  describe(`subtract(a, b)`, () => {
    it(`Should correctly subtract two values`, () => {
      expect(subtract(1, 3)).toBe(-2);
    });

    it(`Should correctly subtract negative values`, () => {
      expect(subtract(-1, -3)).toBe(2);
    });
  });

  describe(`multiply(a, b)`, () => {
    it(`Should correctly multiply two values`, () => {
      expect(multiply(5, 3)).toBe(15);
    });

    it(`Should correctly multiply negative values`, () => {
      expect(multiply(-5, -3)).toBe(15);
    });
  });

  describe(`divide(a, b)`, () => {
    it(`Should correctly divide two values`, () => {
      expect(divide(15, 3)).toBe(5);
    });

    it(`Should correctly divide negative values`, () => {
      expect(divide(-15, -3)).toBe(5);
    });

    it(`Should throw when an attempt is made to divide by zero`, () => {
      expect(() => divide(100, 0)).toThrow(`You can't divide by zero, fool!`);
    });
  });
});
