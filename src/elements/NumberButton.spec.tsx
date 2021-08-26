import { fireEvent, render, screen } from '@testing-library/react';

import { NumberButton } from './NumberButton';

describe(`NumberButton`, () => {
  it(`Should render a number button`, () => {
    const handleClick = () => {};
    render(<NumberButton label='0' onClick={handleClick} value={0} />);

    expect(screen.getByText(`0`)).toMatchSnapshot();
  });

  it(`Should invoke the handler when clicked`, () => {
    const handleClick = jest.fn();
    render(<NumberButton label='0' onClick={handleClick} value={0} />);

    fireEvent.click(screen.getByText(`0`));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(0);
  })
});
