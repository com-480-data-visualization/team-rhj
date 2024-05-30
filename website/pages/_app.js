import React from "react";
import Header from "../components/Header";
import "../style/style.css";
import { createTheme, ThemeProvider } from '@mui/material';
// Create a theme with SF Pro as the default font
const theme = createTheme({
  typography: {
    fontFamily: [
      'Arial',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider theme={theme}>
          <Component {...pageProps} />
    </ThemeProvider>
  );
}