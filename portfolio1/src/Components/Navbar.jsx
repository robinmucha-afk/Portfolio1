import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' }
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  return (
    <AppBar position="sticky" color="transparent" elevation={0} sx={{ backdropFilter: 'blur(8px)' }}>
      <Toolbar sx={{ justifyContent: 'space-between', py: 2 }}>
        <Typography variant="h6" fontWeight={700}>Robin Syntax</Typography>
        {isMobile ? (
          <>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              <Box sx={{ width: 220, pt: 4 }} role="presentation" onClick={handleDrawerToggle}>
                <List>
                  {navLinks.map(link => (
                    <ListItem button key={link.to}>
                      <ListItemText>
                        <ScrollLink
                          to={link.to}
                          smooth
                          duration={500}
                          style={{ color: '#fff', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer' }}
                        >
                          {link.label}
                        </ScrollLink>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
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
        )}
      </Toolbar>
    </AppBar>
  );
}
