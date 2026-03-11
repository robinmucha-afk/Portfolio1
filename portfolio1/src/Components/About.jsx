import React from 'react'
import { Box, Typography, Avatar, Container, Stack } from '@mui/material';

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, bgcolor: 'background.paper' }}>
      <Container>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
          <Avatar src="/Portfolio1/profile.jpg" sx={{ width: 120, height: 120 }} />
          <Box>
            <Typography variant="h2" gutterBottom>About Me</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Age: <b>31</b> <br />
              Location: <b>Bottrop, NRW - Germany</b><br />
              Zertificates:<br />
              <b>Junior Product Design (IHK)</b><br />
              <b>Junior Web Developer (IHK)</b>
            </Typography>
            <Typography variant="body1">
              Driven by curiosity and a passion for elegant solutions, I combine design thinking and technical expertise to build products that are both beautiful and functional.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
