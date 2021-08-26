import { render, screen } from '@testing-library/react';

import { HorizontalStrip } from './HorizontalStrip';
import { LayoutDirection } from './layout-direction';

const LENGTH = 3;

const makeChildren = (length: number): JSX.Element[] =>
  Array.from({ length }, (_v, i) => (
    <div data-testid={`item-${i}`} key={`key-${i}`}>
      value {i}
    </div>
  ));

const makeStrip = () => (
  <HorizontalStrip length={LENGTH}>{makeChildren(3)}</HorizontalStrip>
);

describe(`HorizontalStrip`, () => {
  it(`Should render the HorizontalStrip with the list of given child items`, () => {
    render(makeStrip());

    expect(screen.getByTestId(`horizontal-strip-layout`)).toMatchSnapshot();
  });

  it(`Should render the grid-template-column direction attribute with the expected value`, () => {
    render(makeStrip());

    const element = screen.getByTestId(`horizontal-strip-layout`);

    expect(element).toHaveStyleRule(`grid-template-columns`, `repeat(3,1fr)`);
  });

  it(`Should render the children in the HorizontalStrip`, async () => {
    render(makeStrip());

    const children = await screen.findAllByTestId(`item`, { exact: false });

    expect(children.length).toBe(3);
  });
});
