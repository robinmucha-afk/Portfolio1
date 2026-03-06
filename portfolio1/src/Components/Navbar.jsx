import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' }
];

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h6" fontWeight={700}>Robin Syntax</Typography>
        <Box>
          {navLinks.map(link => (
            <Button
              key={link.to}
              component={ScrollLink}
              to={link.to}
              smooth
              duration={500}
              sx={{ mx: 1, color: 'text.primary' }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
