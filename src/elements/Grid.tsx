import { FC } from "react";

import { LayoutDirection } from "./layout-direction";
import { Layout } from "./Layout.style";

type GridPropsWithCols = { cols: number };
type GridPropsWithItems = {
  layoutDirection?: LayoutDirection;
  items: number[];
};

export type GridProps = GridPropsWithCols | GridPropsWithItems;

const hasCols = (props: GridProps): props is GridPropsWithCols =>
  !!Object.keys(props).find(key => key === `cols`);

export const Grid: FC<GridProps> = ({ children, ...props }) => {
  if (hasCols(props)) {
    const { cols } = props;

    return (
      <Layout
        layoutDirection={LayoutDirection.ROW}
        length={cols}
        data-testid="grid-layout"
      >
        {children}
      </Layout>
    );
  }

  const { layoutDirection = LayoutDirection.ROW, items } = props;

  return (
    <Layout
      layoutDirection={layoutDirection}
      items={items}
      data-testid="grid-layout"
    >
      {children}
    </Layout>
  );
};
