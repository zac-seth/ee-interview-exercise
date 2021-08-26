import { render, screen } from '@testing-library/react';

import { VerticalStrip } from './VerticalStrip';

const LENGTH = 3;

const makeChildren = (length: number): JSX.Element[] =>
  Array.from({ length }, (_v, i) => (
    <div data-testid={`item-${i}`} key={`key-${i}`}>
      value {i}
    </div>
  ));

const makeStrip = () => (
  <VerticalStrip length={LENGTH}>{makeChildren(3)}</VerticalStrip>
);

describe(`VerticalStrip`, () => {
  it(`Should render the VerticalStrip with the list of given child items`, () => {
    render(makeStrip());

    expect(screen.getByTestId(`vertical-strip-layout`)).toMatchSnapshot();
  });

  it(`Should render the grid-template-rows direction attribute with the expected value`, () => {
    render(makeStrip());

    const element = screen.getByTestId(`vertical-strip-layout`);

    expect(element).toHaveStyleRule(`grid-template-rows`, `repeat(3,1fr)`);
  });

  it(`Should render the children in the VerticalStrip`, async () => {
    render(makeStrip());

    const children = await screen.findAllByTestId(`item`, { exact: false });

    expect(children.length).toBe(3);
  });
});
