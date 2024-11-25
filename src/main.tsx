import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './theme.ts';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
} else {
  console.error('Root element not found.');
}
