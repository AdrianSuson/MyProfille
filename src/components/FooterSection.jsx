// src/components/FooterSection.js

import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterSection = React.forwardRef((props, ref) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      ref={ref}
      sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        p: 4,
        background: `linear-gradient(to top, ${
          isDarkMode ? theme.palette.background.default : theme.palette.grey[200]
        }, ${isDarkMode ? theme.palette.grey[900] : theme.palette.grey[300]})`,
        color: theme.palette.text.primary,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 'bold',
          fontSize: { xs: '1.5em', sm: '2em' },
          color: theme.palette.text.primary,
        }}
      >
        Contact
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 1,
          color: theme.palette.text.secondary,
        }}
      >
        <EmailIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
        suson.adrian19@gmail.com
      </Typography>
      <Typography
        variant="body1"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 3,
          color: theme.palette.text.secondary,
        }}
      >
        <PhoneIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
        09956202850
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.info.main }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://github.com/AdrianSuson"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.primary }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.info.main }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
});

FooterSection.displayName = 'FooterSection';

export default FooterSection;
