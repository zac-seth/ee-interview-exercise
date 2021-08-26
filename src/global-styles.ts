import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { textBody } from 'tokens';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  html {
    /**
     * Sourced from Unsplash: https://unsplash.com/photos/lpOFfgQCRmM
     * I just randomly chose it in a quick search, figured it was good enough 🤷‍♂️
     */
    background: url(https://images.unsplash.com/photo-1520222312538-f1e217817b3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyOTQ4NzAwOQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=2400) no-repeat center center fixed;
    background-size: cover;
    font-size: 62.5%;
  }

  body {
    ${textBody}

    margin: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
