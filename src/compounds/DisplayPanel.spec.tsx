import { render, screen } from "@testing-library/react";

import { DisplayPanel } from "./DisplayPanel";

describe(`DisplayPanel`, () => {
  it(`Should render the display panel`, () => {
    render(<DisplayPanel primary="1000" secondary="100 + 250 - 30" />);

    expect(screen.getByTestId(`multi-line-display-panel`)).toMatchSnapshot();
  });
});
