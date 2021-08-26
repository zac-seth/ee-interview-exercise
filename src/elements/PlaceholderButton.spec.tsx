import { render, screen } from '@testing-library/react';

import { PlaceholderButton } from './PlaceholderButton';

describe(`PlaceholderButton`, () => {
  it(`Should render a placeholder button`, () => {
    render(<PlaceholderButton label='?' />);

    expect(screen.getByText(`?`)).toMatchSnapshot();
  });
});
