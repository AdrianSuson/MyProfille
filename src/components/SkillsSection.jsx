// src/components/SkillsSection.js

import React from 'react';
import { Box, Typography, Grid, Card, CardContent, useTheme } from '@mui/material';
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const skillData = [
  { name: 'React', icon: <FaReact size={50} color="#61dafb" />, level: 'Intermediate' },
  { name: 'Material-UI', icon: <SiMui size={50} color="#007FFF" />, level: 'Beginner' },
  { name: 'Node.js', icon: <FaNode size={50} color="#68a063" />, level: 'Intermediate' },
  { name: 'Express.js', icon: <SiExpress size={50} color="#f7df1e" />, level: 'Beginner' },
];

const SkillsSection = React.forwardRef((props, ref) => {
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
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`, // Dynamic gradient based on theme
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      {/* Title */}
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
        Skills
      </Typography>

      {/* Skill Cards */}
      <Grid container spacing={3} justifyContent="center" sx={{ width: '90%' }}>
        {skillData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              variant="outlined"
              sx={{
                padding: 3,
                textAlign: 'center',
                background: theme.palette.background.paper, // Card background from theme
                color: theme.palette.text.primary,
                borderRadius: '15px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.08)',
                  boxShadow: `0px 6px 25px ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`, // Hover shadow based on theme
                },
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ mb: 1.5, transition: 'transform 0.3s ease' }}>
                  {skill.icon} {/* Icon color from primary color */}
                </Box>
                <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.25em', color: theme.palette.text.primary }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                  {skill.level}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;
