import { FC } from 'react';

import { PrimaryNumberDisplay, SecondaryNumberDisplay } from 'elements';

import { MultiLineDisplayPanel } from './MultiLineDisplayPanel.style';

export type DisplayPanelProps = {
  primary: string;
  secondary: string;
};

export const DisplayPanel: FC<DisplayPanelProps> = ({ primary, secondary }) => (
  <MultiLineDisplayPanel data-testid="multi-line-display-panel">
    <PrimaryNumberDisplay value={primary} />
    <SecondaryNumberDisplay value={secondary} />
  </MultiLineDisplayPanel>
);
