import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#fff' },
    secondary: { main: '#00bfff' },
    background: { default: '#181a1b', paper: '#23272a' },
    text: { primary: '#fff', secondary: '#b0b3b8' },
  },
  typography: {
    fontFamily: [
      'Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem', letterSpacing: '-0.5px' },
    h2: { fontWeight: 600, fontSize: '2rem', letterSpacing: '-0.5px' },
    h3: { fontWeight: 500, fontSize: '1.5rem', letterSpacing: '-0.5px' },
    body1: { fontSize: '1.1rem' },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 10 }
      }
    }
  }
});

export default theme;
 