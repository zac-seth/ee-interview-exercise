import { render, screen } from '@testing-library/react';

import { PrimaryNumberDisplay } from './PrimaryNumberDisplay';

describe(`PrimaryNumberDisplay`, () => {
  it(`Should render the component`, () => {
    render(<PrimaryNumberDisplay value='101' />);

    expect(screen.getByText(`101`)).toMatchSnapshot();
  });
});
