import React from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import BackToTop from './Components/BackToTop';
import ParticleBackground from './Components/ParticleBackground';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <BackToTop />
    </ThemeProvider>
  );
}
