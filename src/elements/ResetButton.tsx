import { ReactElement } from 'react';

import { Button } from './Button.style';
import { ValuelessButtonProps } from './shared';

export const ResetButton = ({
  label,
  onClick
}: ValuelessButtonProps): ReactElement => (
  <Button onClick={onClick} isFunction>
    {label}
  </Button>
);
