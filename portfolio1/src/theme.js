import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#222' },
    secondary: { main: '#0070f3' },
    background: { default: '#f8fafc', paper: '#fff' },
  },
  typography: {
    fontFamily: [
      'Inter', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
    ].join(','),
    h1: { fontWeight: 700, fontSize: '2.5rem' },
    h2: { fontWeight: 600, fontSize: '2rem' },
    h3: { fontWeight: 500, fontSize: '1.5rem' },
    body1: { fontSize: '1.1rem' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', borderRadius: 8 }
      }
    }
  }
});

export default theme;
