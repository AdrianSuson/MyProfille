// src/components/HeaderSection.js

import React from "react";
import { Avatar, Box, Typography, useTheme } from "@mui/material";
import base64Image from "../assets/base64Image";
import PropTypes from "prop-types";

const HeaderSection = React.forwardRef((props, ref) => {
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        p: 3,
        background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`, // Dynamic background gradient
        color: theme.palette.text.primary,
        textAlign: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          fontSize: { xs: "1em", sm: "1.2em" },
          color: theme.palette.text.secondary,
          textTransform: "uppercase",
          letterSpacing: 2,
          mb: 1,
        }}
      >
        Hey there!
      </Typography>

      <Avatar
        src={base64Image}
        alt="Adrian Suson"
        sx={{
          width: { xs: 120, sm: 140, md: 180 },
          height: { xs: 120, sm: 140, md: 180 },
          mb: 3,
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 4px 15px rgba(0, 0, 0, 0.2)"
              : "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2.2em", sm: "3em", md: "3.5em" },
          fontWeight: 700,
          color: theme.palette.text.primary,
        }}
      >
        I am Adrian Suson
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontSize: { xs: "1em", sm: "1.2em", md: "1.4em" },
          color: theme.palette.text.secondary,
          maxWidth: "70%",
          mb: 3,
        }}
      >
        Web Developer
      </Typography>
    </Box>
  );
});

HeaderSection.displayName = "HeaderSection";

HeaderSection.propTypes = {
  isDarkMode: PropTypes.bool, // Optional if handled solely by theme
};

export default HeaderSection;
