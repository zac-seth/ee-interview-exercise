import { FC } from 'react';

import { Panel, PanelVariant } from './Panel.style';

export type HeroPanelProps = {
  children: JSX.Element;
};

export const HeroPanel: FC<HeroPanelProps> = ({ children }) => (
  <Panel variant={PanelVariant.HERO} data-testid='hero-panel'>
    {children}
  </Panel>
);
