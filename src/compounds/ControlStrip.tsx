import { FC } from 'react';

import {
  CalculateButton,
  HandleCalculateSelected,
  HandleResetSelected,
  HorizontalStrip,
  PlaceholderButton,
  ResetButton,
} from 'elements';

export type ControlStripProps = {
  onCalculateSelected: HandleCalculateSelected;
  onResetSelected: HandleResetSelected;
};

export const ControlStrip: FC<ControlStripProps> = ({
  onCalculateSelected,
  onResetSelected
}) => (
  <HorizontalStrip length={4}>
    <PlaceholderButton label='?' />
    <ResetButton
      onClick={() => onResetSelected({ isFullReset: true })}
      label='CE'
    />
    <ResetButton onClick={onResetSelected} label='C' />
    <CalculateButton onClick={onCalculateSelected} label='=' />
  </HorizontalStrip>
);
