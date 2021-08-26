import { fireEvent, render, screen } from '@testing-library/react';

import { add } from 'elements';

import { FunctionButton } from './FunctionButton';

describe(`FunctionButton`, () => {
  it(`Should render a calculate button`, () => {
    const handleClick = () => {};
    render(<FunctionButton label='+' onClick={handleClick} value={add} />);

    expect(screen.getByText(`+`)).toMatchSnapshot();
  });

  it(`Should invoke the handler when clicked`, () => {
    const handleClick = jest.fn();
    render(<FunctionButton label='+' onClick={handleClick} value={add} />);

    fireEvent.click(screen.getByText(`+`));

    expect(handleClick).toHaveBeenCalledTimes(1);
  })
});
