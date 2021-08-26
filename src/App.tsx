import { VFC } from 'react';

import { Calculator } from 'app';

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
import { ContentPanel } from 'elements';

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
          <ContentPanel>
            <Calculator />
          </ContentPanel>
        </Body>
      </AppContainer>
    </>
  );
};
