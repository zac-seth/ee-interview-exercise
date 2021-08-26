import { fireEvent, render, screen } from '@testing-library/react';

import { CalculateButton } from './CalculateButton';

describe(`CalculateButton`, () => {
  it(`Should render a calculate button`, () => {
    const handleClick = () => {};
    render(<CalculateButton label='+' onClick={handleClick} />);

    expect(screen.getByText(`+`)).toMatchSnapshot();
  });

  it(`Should invoke the handler when clicked`, () => {
    const handleClick = jest.fn();
    render(<CalculateButton label='+' onClick={handleClick} />);

    fireEvent.click(screen.getByText(`+`));

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});
