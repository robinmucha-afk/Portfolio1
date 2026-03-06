import { Box, TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Add email sending logic here (e.g. EmailJS, Formspree)
    alert('Thank you for reaching out!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, maxWidth: 400 }}>
      <Stack spacing={2}>
        <TextField label="Name" name="name" value={form.name} onChange={handleChange} required />
        <TextField label="Email" name="email" value={form.email} onChange={handleChange} required type="email" />
        <TextField label="Message" name="message" value={form.message} onChange={handleChange} required multiline rows={4} />
        <Button type="submit" variant="contained" color="primary">Send</Button>
      </Stack>
    </Box>
  );
}
