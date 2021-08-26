import { NumericFunction } from './function';

export type ResetOptions = { isFullReset: boolean };

export interface HandleCalculateSelected {
  (): void;
}

export interface HandleFunctionSelected {
  (func: NumericFunction): void;
}

export interface HandleResetSelected {
  (options?: ResetOptions): void;
}

export interface HandleValueSelected {
  (value: number): void;
}
