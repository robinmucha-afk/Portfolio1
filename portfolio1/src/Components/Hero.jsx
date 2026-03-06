import { Box, Typography, Button, Container } from '@mui/material';
import { useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  const cursorRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const hero = heroRef.current;
    let active = false;

    const onMouseMove = (e) => {
      if (!active) return;
      cursor.style.left = `${e.clientX - 40}px`;
      cursor.style.top = `${e.clientY - 40}px`;
    };

    const onEnter = () => {
      active = true;
      cursor.classList.add('active');
      document.addEventListener('mousemove', onMouseMove);
    };
    const onLeave = () => {
      active = false;
      cursor.classList.remove('active');
      document.removeEventListener('mousemove', onMouseMove);
    };

    if (hero) {
      hero.addEventListener('mouseenter', onEnter);
      hero.addEventListener('mouseleave', onLeave);
    }
    return () => {
      if (hero) {
        hero.removeEventListener('mouseenter', onEnter);
        hero.removeEventListener('mouseleave', onLeave);
      }
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="hero-glow-cursor" />
      <Box
        id="hero"
        ref={heroRef}
        sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}
      >
        <Container>
          <Typography variant="h1" gutterBottom>
            Hi, I'm Robin Syntax.
          </Typography>
          <Typography variant="h3" color="text.secondary" gutterBottom>
            Frontend Developer & UX Designer
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            I craft premium web experiences with a focus on design, performance, and usability.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            component={ScrollLink}
            to="projects"
            smooth
            duration={500}
            size="large"
          >
            View Projects
          </Button>
        </Container>
      </Box>
    </>
  );
}
