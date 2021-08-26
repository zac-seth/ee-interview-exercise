import { fireEvent, render, screen } from "@testing-library/react";

import { NumberPad } from "./NumberPad";

const handleValueSelected = jest.fn();

describe(`NumberPad`, () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it(`Should render the number pad`, () => {
    render(<NumberPad onValueSelected={handleValueSelected} />);

    expect(screen.getByTestId(`grid-layout`)).toMatchSnapshot();
  });

  it(`Should render the correct buttons in the pad`, async () => {
    render(<NumberPad onValueSelected={handleValueSelected} />);

    const buttons = await screen.findAllByRole(`button`);

    expect(buttons.length).toBe(12);
  });

  it(`Should correctly pass the value selected`, async () => {
    render(<NumberPad onValueSelected={handleValueSelected} />);

    fireEvent.click(screen.getByText(`1`));
    fireEvent.click(screen.getByText(`2`));
    fireEvent.click(screen.getByText(`3`));

    expect(handleValueSelected).toHaveBeenCalledWith(1);
    expect(handleValueSelected).toHaveBeenCalledWith(12);
    expect(handleValueSelected).toHaveBeenCalledWith(123);
  });
});
