import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </ThemeProvider>
  );
}
