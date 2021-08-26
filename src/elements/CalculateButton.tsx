import { ReactElement } from 'react';

import { Button } from './Button.style';
import { ValuelessButtonProps } from './shared';

export const CalculateButton = ({
  label,
  onClick
}: ValuelessButtonProps): ReactElement => (
  <Button onClick={onClick} isCalculate>
    {label}
  </Button>
);
