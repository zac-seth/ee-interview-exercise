import { ReactElement } from 'react';

import { NumericFunction } from 'elements';

import { Button } from './Button.style';
import { BasicButtonProps } from './shared';

export const FunctionButton = <TValue extends NumericFunction>({
  label,
  onClick,
  value
}: BasicButtonProps<TValue>): ReactElement => (
  <Button
    onClick={() => onClick(value)}
    isFunction
    dangerouslySetInnerHTML={{ __html: label }}
  />
);
