import { fireEvent, render, screen } from "@testing-library/react";

import { add, divide, multiply, subtract } from "elements";

import { ArithmeticStrip } from "./ArithmeticStrip";

const handleFunctionSelected = jest.fn();

describe(`ArithmeticStrip`, () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it(`Should render the arithmetic button strip`, () => {
    render(<ArithmeticStrip onFunctionSelected={() => {}} />);

    expect(screen.getByTestId(`vertical-strip-layout`)).toMatchSnapshot();
  });

  it(`Should render the correct buttons in the strip`, async () => {
    render(<ArithmeticStrip onFunctionSelected={() => {}} />);

    expect(await screen.findByText(`÷`)).toBeDefined();
    expect(await screen.findByText(`×`)).toBeDefined();
    expect(await screen.findByText(`−`)).toBeDefined();
    expect(await screen.findByText(`+`)).toBeDefined();
  });

  it(`Should correctly pass the divide function when divide is selected`, async () => {
    render(<ArithmeticStrip onFunctionSelected={handleFunctionSelected} />);

    fireEvent.click(screen.getByText(`÷`));

    expect(handleFunctionSelected).toHaveBeenCalledWith(divide);
  });

  it(`Should correctly pass the divide function when multiply is selected`, async () => {
    render(<ArithmeticStrip onFunctionSelected={handleFunctionSelected} />);

    fireEvent.click(screen.getByText(`×`));

    expect(handleFunctionSelected).toHaveBeenCalledWith(multiply);
  });

  it(`Should correctly pass the divide function when subtract is selected`, async () => {
    render(<ArithmeticStrip onFunctionSelected={handleFunctionSelected} />);

    fireEvent.click(screen.getByText(`−`));

    expect(handleFunctionSelected).toHaveBeenCalledWith(subtract);
  });

  it(`Should correctly pass the divide function when add is selected`, async () => {
    render(<ArithmeticStrip onFunctionSelected={handleFunctionSelected} />);

    fireEvent.click(screen.getByText(`+`));

    expect(handleFunctionSelected).toHaveBeenCalledWith(add);
  });
});
