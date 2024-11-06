// src/theme.js

import { createTheme } from '@mui/material/styles';

const commonSettings = {
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h5: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 3px 6px rgba(0,0,0,0.15)',
          },
        },
        containedPrimary: {
          color: '#ffffff',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
};

const lightTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',       // Rich, vibrant blue
      light: '#63a4ff',      // Lighter blue for hover/focus states
      dark: '#004ba0',       // Darker shade for contrast
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#26a69a',       // Teal for accents
      light: '#64d8cb',      // Lighter teal
      dark: '#00766c',       // Dark teal for better contrast
      contrastText: '#ffffff',
    },
    background: {
      default: '#f9fafc',    // Soft, light background
      paper: '#ffffff',      // Clean white for paper elements
    },
    text: {
      primary: '#212121',    // Dark gray for high readability
      secondary: '#5f6368',  // Medium gray for secondary text
    },
    divider: '#e3e3e3',      // Soft divider for light theme
  },
});

const darkTheme = createTheme({
  ...commonSettings,
  palette: {
    mode: 'dark',
    primary: {
      main: '#82b1ff',       // Softer, muted blue for accessibility
      light: '#b6e3ff',      // Light blue for hover/focus states
      dark: '#2a3c4e',       // Darker shade for depth
      contrastText: '#000000',
    },
    secondary: {
      main: '#80cbc4',       // Muted teal for a calm look
      light: '#b2fef7',      // Lighter teal for accents
      dark: '#4a7c74',       // Darker teal for depth
      contrastText: '#000000',
    },
    background: {
      default: '#121212',    // Deep gray for dark theme background
      paper: '#1e1e1e',      // Slightly lighter for cards and modals
    },
    text: {
      primary: '#e0e0e0',    // Light gray for main text
      secondary: '#a5a5a5',  // Medium gray for secondary text
    },
    divider: '#474747',      // Darker divider for contrast in dark mode
  },
});

export { lightTheme, darkTheme };
