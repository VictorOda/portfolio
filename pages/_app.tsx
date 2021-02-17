import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../src/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Fira Sans Condensed', sans-serif;
    // Deixa branco no começo
    color: #292F35;
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// const theme = {
//   colors: {
//     primary: '#00C2DA',
//     background: '#292F35',
//     header: '#141517',
//     text: '#FFF',
//     contrastBackground: '#5B6167',
//     contrastText: '#000',
//   },
// };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>&lt;oda /&gt;</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@200;400;500;700;900&family=Fira+Sans:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
