import { FC } from 'react';

import { LayoutDirection } from './layout-direction';
import { Layout } from './Layout.style';

export type HorizontalStripProps = { length: number };

export const HorizontalStrip: FC<HorizontalStripProps> = ({
  children,
  length
}) => (
  <Layout
    layoutDirection={LayoutDirection.ROW}
    length={length}
    data-testid='horizontal-strip-layout'
  >
    {children}
  </Layout>
);
