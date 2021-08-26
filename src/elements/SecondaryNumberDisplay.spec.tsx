import { render, screen } from '@testing-library/react';

import { SecondaryNumberDisplay } from './SecondaryNumberDisplay';

describe(`SecondaryNumberDisplay`, () => {
  it(`Should render the component`, () => {
    render(<SecondaryNumberDisplay value='10 + 15 &times;' />);

    expect(screen.getByText(`10 + 15 ×`)).toMatchSnapshot();
  });
});
