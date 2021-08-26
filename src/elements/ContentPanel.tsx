import { FC } from 'react';

import { Panel, PanelVariant } from './Panel.style';

export type ContentPanelProps = {
  children: JSX.Element;
};

export const ContentPanel: FC<ContentPanelProps> = ({ children }) => (
  <Panel variant={PanelVariant.CONTENT} data-testid='content-panel'>
    {children}
  </Panel>
);
