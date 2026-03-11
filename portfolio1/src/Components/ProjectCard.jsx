import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ image, title, description, techStack, github, demo }) {
  return (
    <Card
      elevation={3}
      sx={{
        background: 'linear-gradient(135deg, #23272a 80%, #2c2f34 100%)',
        color: 'text.primary',
        transition: 'transform 0.2s, box-shadow 0.2s',
        p: 2,
        boxShadow: 3,
        cursor: 'pointer',
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
        e.currentTarget.style.boxShadow = '0 0 24px 4px #00bfff, 0 0 8px 2px #fff';
        e.currentTarget.style.filter = 'brightness(1.1)';
        e.currentTarget.style.cursor = 'pointer';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.25)';
        e.currentTarget.style.filter = 'none';
        e.currentTarget.style.cursor = 'pointer';
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover', bgcolor: '#181a1b' }}
      />
      <CardContent sx={{ p: 0, pt: 2 }}>
        <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Inter, Roboto, sans-serif', fontWeight: 600 }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontFamily: 'Inter, Roboto, sans-serif' }}>{description}</Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2 }}>
          {techStack.map(tech => (
            <Chip key={tech} label={tech} size="small" color="secondary" sx={{ fontFamily: 'Inter, Roboto, sans-serif', fontWeight: 500 }} />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Button size="small" startIcon={<GitHubIcon />} href={github} target="_blank" sx={{ fontFamily: 'Inter, Roboto, sans-serif' }}>GitHub</Button>
        <Button size="small" startIcon={<LaunchIcon />} href={demo} target="_blank" sx={{ fontFamily: 'Inter, Roboto, sans-serif' }}>Demo</Button>
      </CardActions>
    </Card>
  );
}
