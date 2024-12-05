'use client';

import Layout from '../components/layout';

import '../styles/fonts.css';
import '../styles/globals.css';
import '../styles/layout.css';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from '../components/styling/style';
import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

function MyApp({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div style={{ backgroundColor: 'white' }}>{children}</div>
      <ProgressBar options={{ showSpinner: false }} />
    </ThemeProvider>
  );
}

export default MyApp;
