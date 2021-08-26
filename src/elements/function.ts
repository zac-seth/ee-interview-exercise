export interface NumericFunction {
  (a: number, b: number): number;
}

export interface PartiallyAppliedNumericFunction {
  (b: number): number;
}

export interface CurriedNumericFunction {
  (a: number): PartiallyAppliedNumericFunction;
}

export interface Curry {
  (f: NumericFunction): CurriedNumericFunction;
}

export const curry: Curry = (f) => (a) => (b) => f(a, b);
