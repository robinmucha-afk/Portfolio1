import React from 'react'
import { Card, CardMedia, CardContent, Typography, Chip, CardActions, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export default function ProjectCard({ image, title, description, techStack, github, demo }) {
  return (
    <Card elevation={3} sx={{
      borderRadius: 3,
      transition: 'transform 0.2s',
      '&:hover': { transform: 'translateY(-8px)', boxShadow: 6 }
    }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover', bgcolor: '#eee' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{description}</Typography>
        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', mb: 2 }}>
          {techStack.map(tech => (
            <Chip key={tech} label={tech} size="small" color="secondary" />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<GitHubIcon />} href={github} target="_blank">GitHub</Button>
        <Button size="small" startIcon={<LaunchIcon />} href={demo} target="_blank">Demo</Button>
      </CardActions>
    </Card>
  );
}
