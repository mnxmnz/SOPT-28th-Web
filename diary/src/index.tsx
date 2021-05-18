import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './assets/styles/global';
import theme from './assets/styles/theme';

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
