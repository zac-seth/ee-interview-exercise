import { fireEvent, render, screen } from "@testing-library/react";

import { ControlStrip } from "./ControlStrip";

const handleCalculateSelected = jest.fn();
const handleResetSelected = jest.fn();

describe(`ControlStrip`, () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it(`Should render the control button strip`, () => {
    render(
      <ControlStrip onCalculateSelected={() => {}} onResetSelected={() => {}} />
    );

    expect(screen.getByTestId(`horizontal-strip-layout`)).toMatchSnapshot();
  });

  it(`Should render the correct buttons in the strip`, async () => {
    render(
      <ControlStrip onCalculateSelected={() => {}} onResetSelected={() => {}} />
    );

    expect(await screen.findByText(`?`)).toBeDefined();
    expect(await screen.findByText(`CE`)).toBeDefined();
    expect(await screen.findByText(`C`)).toBeDefined();
    expect(await screen.findByText(`=`)).toBeDefined();
  });

  it(`Should correctly pass the divide function when divide is selected`, async () => {
    render(
      <ControlStrip
        onCalculateSelected={handleCalculateSelected}
        onResetSelected={handleResetSelected}
      />
    );

    fireEvent.click(screen.getByText(`CE`));

    expect(handleResetSelected).toHaveBeenCalledTimes(1);
    expect(handleResetSelected).toHaveBeenCalledWith({ isFullReset: true });
  });

  it(`Should correctly pass the divide function when multiply is selected`, async () => {
    render(
      <ControlStrip
        onCalculateSelected={handleCalculateSelected}
        onResetSelected={handleResetSelected}
      />
    );

    fireEvent.click(screen.getByText(`C`));

    expect(handleResetSelected).toHaveBeenCalledTimes(1);
  });

  it(`Should correctly pass the divide function when subtract is selected`, async () => {
    render(
      <ControlStrip
        onCalculateSelected={handleCalculateSelected}
        onResetSelected={handleResetSelected}
      />
    );

    fireEvent.click(screen.getByText(`=`));

    expect(handleCalculateSelected).toHaveBeenCalledTimes(1);
  });
});
