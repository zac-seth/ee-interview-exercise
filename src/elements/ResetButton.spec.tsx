import { fireEvent, render, screen } from '@testing-library/react';

import { ResetButton } from './ResetButton';

describe(`ResetButton`, () => {
  it(`Should render a reset button`, () => {
    const handleClick = () => {};
    render(<ResetButton label='C' onClick={handleClick} />);

    expect(screen.getByText(`C`)).toMatchSnapshot();
  });

  it(`Should invoke the handler when clicked`, () => {
    const handleClick = jest.fn();
    render(<ResetButton label='c' onClick={handleClick} />);

    fireEvent.click(screen.getByText(`c`));

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});
