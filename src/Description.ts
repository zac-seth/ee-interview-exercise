import styled from 'styled-components';
import Markdown from 'react-markdown';

import { textBody } from 'tokens';

export const Description = styled(Markdown)`
  background-color: #fff;
  border-radius: 0.25rem;
  padding: 1rem;

  & p {
    ${textBody}

    font-size: 2rem;
    font-weight: 300;
    margin: 0 0 3rem;
  }

  & ul {
    ${textBody}

    margin-bottom: 1rem;
  }

  & li {
    margin-bottom: 0.25rem;
    font-size: 2rem;

    ${textBody}

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
