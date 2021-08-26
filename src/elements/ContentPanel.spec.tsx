import { render, screen } from '@testing-library/react';

import { ContentPanel } from './ContentPanel';

describe(`ContentPanel`, () => {
  it(`Should render a content panel`, () => {
    render(
      <ContentPanel>
        <div>Content in a panel!</div>
      </ContentPanel>
    );

    expect(screen.getByTestId(`content-panel`)).toMatchSnapshot();
  });

  it(`Should choose the content panel background color style`, () => {
    render(
      <ContentPanel>
        <div>Content in a panel!</div>
      </ContentPanel>
    );

    const contentPanel = screen.getByTestId(`content-panel`);

    expect(contentPanel).toHaveStyleRule(`background-color`, `#FFF`);
  });
});
