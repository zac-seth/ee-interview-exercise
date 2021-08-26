import { ReactElement } from 'react';

import { Button } from './Button.style';
import { BasicButtonProps } from './shared';

export type PlaceholderButtonProps = Omit<
  BasicButtonProps<unknown>,
  'onClick' | 'value'
>;

export const PlaceholderButton = ({
  label
}: PlaceholderButtonProps): ReactElement => (
  <Button isPlaceholder>{label}</Button>
);
