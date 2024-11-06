// src/App.js

import {
  ThemeProvider,
  CssBaseline,
  Box,
  IconButton,
  Tooltip,
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import HeaderSection from "./components/HeaderSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { lightTheme, darkTheme } from "./theme";

const sections = ["header", "about", "skills", "projects", "footer"];

const Sidebar = ({ activeSection, onDotClick }) => (
  <Box
    sx={{
      position: "fixed",
      top: "50%",
      right: "1.5rem",
      transform: "translateY(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.5rem",
    }}
  >
    {sections.map((section) => (
      <Tooltip
        key={section}
        title={section.charAt(0).toUpperCase() + section.slice(1)}
        placement="left"
      >
        <IconButton
          onClick={() => onDotClick(section)}
          sx={{
            padding: 0,
            "&:focus": { outline: "none" },
          }}
        >
          <Box
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor:
                activeSection === section ? "#FFFFFF" : "#b0b0b0",
              transition: "all 0.3s ease",
              "&:hover": {
                width: "15px",
                height: "15px",
                backgroundColor: "#FFFFFF",
              },
            }}
          />
        </IconButton>
      </Tooltip>
    ))}
  </Box>
);

Sidebar.propTypes = {
  activeSection: PropTypes.string.isRequired,
  onDotClick: PropTypes.func.isRequired,
};

const MainContent = ({ onThemeToggle, isDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionRefs = useRef(sections.map(() => React.createRef()));
  const [activeSection, setActiveSection] = useState(
    location.pathname.substring(1)
  );

  const scrollToSection = (section) => {
    const sectionIndex = sections.indexOf(section.toLowerCase());
    if (sectionIndex !== -1 && sectionRefs.current[sectionIndex].current) {
      sectionRefs.current[sectionIndex].current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (section) => {
    navigate(`/${section}`);
    scrollToSection(section);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  useEffect(() => {
    const section = location.pathname.substring(1).toLowerCase();
    setActiveSection(section);
    scrollToSection(section);
  }, [location]);

  return (
    <Box sx={{ scrollBehavior: "smooth" }}>
      <Sidebar
        activeSection={activeSection}
        onDotClick={handleDotClick}
        onThemeToggle={onThemeToggle}
        isDarkMode={isDarkMode}
      />

      <Box ref={sectionRefs.current[0]} id="header">
        <HeaderSection isDarkMode={isDarkMode} />
      </Box>
      <Box ref={sectionRefs.current[1]} id="about">
        <AboutSection isDarkMode={isDarkMode} />
      </Box>
      <Box ref={sectionRefs.current[2]} id="skills">
        <SkillsSection isDarkMode={isDarkMode} />
      </Box>
      <Box ref={sectionRefs.current[3]} id="projects">
        <ProjectsSection isDarkMode={isDarkMode} />
      </Box>
      <Box ref={sectionRefs.current[4]} id="footer">
        <FooterSection isDarkMode={isDarkMode} />
      </Box>
    </Box>
  );
};

MainContent.propTypes = {
  onThemeToggle: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

function App() {
  // Initialize theme from localStorage or default to light mode
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem("isDarkMode")) || false
  );

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("isDarkMode", JSON.stringify(newMode)); // Save to localStorage
      return newMode;
    });
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <IconButton
        onClick={handleThemeToggle}
        sx={{
          position: "fixed",
          top: 16,
          right: 16,
          color: isDarkMode
            ? lightTheme.palette.primary.contrastText
            : darkTheme.palette.primary.contrastText,
          "&:focus": { outline: "none" },
        }}
      >
        {isDarkMode ? <MdDarkMode /> : <CiLight />}
      </IconButton>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={
              <MainContent
                onThemeToggle={handleThemeToggle}
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
