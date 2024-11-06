// src/components/AboutSection.jsx

import React from 'react';
import { Box, Typography, Divider, useTheme } from '@mui/material';

const AboutSection = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 5,
        textAlign: 'center',
        background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`, // Dynamic gradient from theme
        color: theme.palette.text.primary,
        minHeight: '100vh',
      }}
    >
      {/* Title with Divider */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '2em', sm: '2.5em', md: '3em' },
          color: theme.palette.text.primary,
          textShadow: isDarkMode ? '1px 1px 3px rgba(0, 0, 0, 0.5)' : 'none',
          animation: 'fadeInTitle 1.5s ease-in-out',
          '@keyframes fadeInTitle': {
            '0%': { opacity: 0, transform: 'translateY(-20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        About Me
      </Typography>
      <Divider
        sx={{
          width: '50px',
          height: '3px',
          backgroundColor: theme.palette.primary.main, // Primary color from theme
          borderRadius: '5px',
          mb: 3,
        }}
      />

      {/* Body Text */}
      <Typography
        variant="body1"
        sx={{
          maxWidth: 600,
          fontSize: { xs: '1em', sm: '1.1em', md: '1.2em' },
          lineHeight: 1.6,
          color: theme.palette.text.secondary, // Secondary text color from theme
          px: 2,
          animation: 'fadeInBody 1.8s ease-in-out',
          '@keyframes fadeInBody': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          '& span': {
            color: theme.palette.primary.main, // Primary color for highlighted text
            fontWeight: 'bold',
          },
        }}
      >
        I&apos;m a <span>passionate developer</span> with a strong foundation in <span>web development</span>. 
        My focus is on crafting <span>responsive</span> and <span>user-friendly applications</span> that provide seamless user experiences. 
        I&apos;m committed to continuous learning and enjoy pushing the boundaries of what&apos;s possible.
      </Typography>
    </Box>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
