import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import Home from './routes/Home';

const darkMode = createTheme({
  palette: {
    mode: 'dark',
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkMode}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
