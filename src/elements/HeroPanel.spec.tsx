import { render, screen } from '@testing-library/react';

import { HeroPanel } from './HeroPanel';

describe(`HeroPanel`, () => {
  it(`Should render a hero panel`, () => {
    render(
      <HeroPanel>
        <div>Hero content in a panel!</div>
      </HeroPanel>
    );

    expect(screen.getByTestId(`hero-panel`)).toMatchSnapshot();
  });

  it(`Should choose the hero panel background color style`, () => {
    render(
      <HeroPanel>
        <div>Hero content in a panel!</div>
      </HeroPanel>
    );

    const heroPanel = screen.getByTestId(`hero-panel`);

    expect(heroPanel).toHaveStyleRule(`background-color`, `#171717`);
  });
});
