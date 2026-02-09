import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'; // If you add global styles

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black for button
    },
    background: {
      default: '#F0F7F4', // Light green
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);