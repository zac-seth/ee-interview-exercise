import { FC } from 'react';

import { LayoutDirection } from './layout-direction';
import { Layout } from './Layout.style';

export type VerticalStripProps = { length: number };

export const VerticalStrip: FC<VerticalStripProps> = ({ children, length }) => (
  <Layout
    layoutDirection={LayoutDirection.COLUMN}
    length={length}
    data-testid='vertical-strip-layout'
  >
    {children}
  </Layout>
);
