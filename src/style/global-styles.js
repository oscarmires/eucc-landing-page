import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'aileron', 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /*
    Universal Box Sizing
  */
    html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

`;

export default GlobalStyles;
