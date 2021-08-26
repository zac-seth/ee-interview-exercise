import { render, screen } from "@testing-library/react";

import { CalculatorShell } from "./CalculatorShell";

const provideSections = () => ({
  controls: <p>section: controls</p>,
  display: <p>section: display</p>,
  functions: <p>section: functions</p>,
  numbers: <p>section: numbers</p>
});

describe(`CalculatorShell`, () => {
  it(`Should render the shell`, () => {
    render(
      <CalculatorShell>
        {provideSections}
      </CalculatorShell>
    );

    const grids = screen.getAllByTestId(`grid-layout`);

    expect(grids[0]).toMatchSnapshot();
  });

  it(`Should render the sections correctly`, () => {
    render(
      <CalculatorShell>
        {provideSections}
      </CalculatorShell>
    );

    const sections = screen.getAllByText(`section:`, { exact: false });

    expect(sections[0]).toHaveTextContent(`section: display`);
    expect(sections[1]).toHaveTextContent(`section: numbers`);
    expect(sections[2]).toHaveTextContent(`section: functions`);
    expect(sections[3]).toHaveTextContent(`section: controls`);
  });
});
