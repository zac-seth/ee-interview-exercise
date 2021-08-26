import { ReactElement } from 'react';

import { Button } from './Button.style';
import { BasicButtonProps } from './shared';

export type NumberButtonProps = BasicButtonProps<number>;

export const NumberButton = <TValue extends unknown>({
  label,
  onClick,
  value
}: BasicButtonProps<TValue>): ReactElement => (
  <Button onClick={() => onClick(value)}>{label}</Button>
);
