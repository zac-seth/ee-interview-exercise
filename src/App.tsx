import { VFC } from 'react';


import { GlobalStyles } from './global-styles';
import {
  AppContainer,
  Body,
  ByLine,
  Header,
  InlineLink,
  Lighten,
  Logo,
  Title,
} from './App.style';

export const App: VFC = () => {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header>
          <Logo src='/assets/images/Equal_Experts_Logo_RGB_Sponsorship_Colour.svg' />
        </Header>
        <Body>
          <Title>
            <Lighten>Delivering.</Lighten> Numerical Value.
          </Title>
          <ByLine>
            An interview submission designed &amp; developed by{' '}
            <InlineLink href='https://github.com/zac-seth' target='_blank'>
              Zac Seth
            </InlineLink>
          </ByLine>
            <div>Calculator Here</div>
        </Body>
      </AppContainer>
    </>
  );
};
