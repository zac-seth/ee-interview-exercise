import styled from 'styled-components';

import { textBody, textHeader } from 'tokens';

export const AppContainer = styled.section`
  display: grid;
  grid-row-gap: 2rem;
`;

export const Header = styled.header`
  background-color: #fff;
  width: 50rem;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Lighten = styled.span`
  color: #aaaaaa;
`;

export const InlineLink = styled.a`
  color: #aaaaaa;
`;

export const Logo = styled.img`
  max-width: 20vw;
`;

export const Title = styled.h1`
  ${textHeader}

  color: #666;
  text-align: center;
  font-size: 3rem;
  margin: 1rem 0 0;
`;

export const ByLine = styled.h2`
  ${textBody}

  color: #666;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

export const Body = styled.section`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
  border-radius: 0.5rem;
`;
