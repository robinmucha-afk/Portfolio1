import React from 'react'
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container>
        <Typography variant="h2" gutterBottom>Contact</Typography>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Link href="mailto:robin.syntax@email.com" underline="hover">robin.syntax@email.com</Link>
          <Link href="https://github.com/robinmucha-afk" target="_blank" underline="hover">
            <GitHubIcon fontSize="medium" />
          </Link>
          <Link href="https://www.linkedin.com/in/robin-mucha-0731243b2/" target="_blank" underline="hover">
            <LinkedInIcon fontSize="medium" />
          </Link>
        </Stack>
        <ContactForm />
      </Container>
    </Box>
  );
}
