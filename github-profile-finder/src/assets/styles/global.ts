import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 10px;
    padding: 35px;
    background-color: #ecf0f1;
  }
`;

export default GlobalStyle;
