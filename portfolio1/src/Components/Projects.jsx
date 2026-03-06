import { Box, Container, Typography, Grid } from '@mui/material';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container>
        <Typography variant="h2" gutterBottom>Projects</Typography>
        <Grid container spacing={4} columns={12}>
          {projects.map(project => (
            <Grid key={project.id} span={12}>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
