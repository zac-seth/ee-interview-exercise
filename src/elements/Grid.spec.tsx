import { render, screen } from '@testing-library/react';

import { Grid } from './Grid';

const COLS = 3;

const makeChildren = (length: number): JSX.Element[] =>
  Array.from({ length }, (_v, i) => (
    <div data-testid={`item-${i}`} key={`key-${i}`}>
      value {i}
    </div>
  ));

const makeGrid = () => <Grid cols={COLS}>{makeChildren(9)}</Grid>;

describe(`Grid`, () => {
  it(`Should render the grid with the list of given child items`, () => {
    render(makeGrid());

    expect(screen.getByTestId(`grid-layout`)).toMatchSnapshot();
  });

  it(`Should render the children in the grid`, async () => {
    render(makeGrid());

    const children = await screen.findAllByTestId(`item`, { exact: false });

    expect(children.length).toBe(9);
  });
});

