// src/components/ProjectsSection.js

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActions, Button, useTheme } from '@mui/material';

const projectData = [
  {
    id: 1,
    title: "Project One",
    description: "A brief description of Project One, showcasing the main features and technologies used.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Project Two",
    description: "A brief description of Project Two, detailing the objectives and tech stack.",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    title: "Project Three",
    description: "A brief description of Project Three, highlighting the key functionalities.",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const ProjectsSection = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: { xs: 3, md: 5 },
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`, // Theme-based gradient
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2em', sm: '2.5em', md: '3em' },
          color: theme.palette.text.primary,
          mb: 3,
        }}
      >
        My Projects
      </Typography>

      {/* Project Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ width: '90%' }}>
        {projectData.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              variant="outlined"
              sx={{
                p: 2,
                textAlign: 'center',
                background: theme.palette.background.paper, // Card background from theme
                color: theme.palette.text.primary,
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                boxShadow: `0px 4px 15px ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)'}`,
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: `0px 6px 25px ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.3)'}`,
                },
              }}
            >
              <CardContent>
                {/* Project Image */}
                <Box
                  component="img"
                  src={project.imageUrl}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: `0px 4px 10px ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.2)'}`,
                    mb: 2,
                  }}
                />

                {/* Project Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: theme.palette.text.primary }}>
                  {project.title}
                </Typography>

                {/* Project Description */}
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  {project.description}
                </Typography>
              </CardContent>

              {/* Action Button */}
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                  size="small"
                  variant="contained"
                  color="primary" // Use primary color from theme
                  sx={{
                    fontWeight: 'bold',
                    px: 3,
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
