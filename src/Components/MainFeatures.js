import { Grid, Box, Card, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import React from "react";

const darkBlueShadow = 'rgba(48, 26, 82, 0.5)';
const primaryBlue = '#301a52';  // Your primary blue color

const features = [
  {
    title: "Comprehensive Practice Tests",
    icon: <SchoolIcon />,
    description: "Full-length practice tests for all four CELPIP modules...",
    detailedText: "Our platform provides practice tests with sample answers for CELPIP modules—Speaking and Writing. Each test is designed to simulate the real CELPIP exam, helping you prepare effectively by practicing under realistic conditions.",
  },
  {
    title: "Real Exam Interface",
    icon: <DesktopWindowsIcon />,
    description: "Experience the real exam layout and navigation...",
    detailedText: "Experience the look and feel of the actual CELPIP exam with our real exam interface. This feature allows you to get comfortable with the exam layout, navigation, and timing, ensuring you're fully prepared on test day.",
  },
  {
    title: "Tips and Strategies",
    icon: <LightbulbIcon />,
    description: "Guidance from experts on managing time, improving grammar...",
    detailedText: "Our website includes sample answers, tips, strategies, and best practices for tackling each section of the CELPIP exam. This includes advice on managing time, improving grammar and vocabulary, and structuring your answers.",
  },
];

const MainFeatures = () => (
  <React.Fragment>
    <Grid container spacing={4} justifyContent="center" padding={4}>
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              padding: 4,
              textAlign: "center",
              boxShadow: `0px 4px 10px ${darkBlueShadow}`, // Adding dark blue shadow
              minHeight: '350px', // Ensure a minimum height for consistency
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              backgroundColor: '#fff', // Default background color
              color: '#000', // Default text color
              transition: 'all 0.1s ease-in-out', // Smoother transition
              overflow: 'hidden', // Ensure the card doesn't overflow
              height: '100%', // Make sure cards are of same size
              '&:hover': {
                backgroundColor: primaryBlue, // On hover, change background to blue
                color: '#fff', // On hover, change text color to white
                boxShadow: `0px 8px 20px ${darkBlueShadow}`, // Increase shadow on hover
              },
              '&:hover .icon, &:hover .title, &:hover .detailed-description': {
                color: '#fff', // Change all children elements to white on hover
              },
            }}
          >
            {/* Icon */}
            <Box
              className="icon"
              sx={{
                fontSize: "4rem",
                color: '#000', // Default icon color
                transition: 'color 0.1s ease-in-out',
              }}
            >
              {feature.icon}
            </Box>

            {/* Feature Title */}
            <Typography
              className="title"
              variant="h5"
              gutterBottom
              sx={{
                transition: 'color 0.1s ease-in-out',
              }}
            >
              <strong>{feature.title}</strong>
            </Typography>

            {/* Detailed description (always visible) */}
            <Typography
              className="detailed-description"
              sx={{
                transition: 'color 0.1s ease-in-out', // Smoother transition
                color: '#000', // Default text color
              }}
            >
              {feature.detailedText}
            </Typography>
          </Card>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
);

export default MainFeatures;
