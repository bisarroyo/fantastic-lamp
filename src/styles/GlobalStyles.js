import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    font-family: 'Ubuntu', sans-serif;
  }
  body {
    background: linear-gradient(#ffffff, #2a9d8f66);
    max-width: 1600px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
