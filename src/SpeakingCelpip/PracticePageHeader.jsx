import React from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme, createTheme, ThemeProvider } from '@mui/material';

// Custom theme with button color #301a52
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#301a52',
    },
  },
});

const PracticePageHeader = ({ taskType, title, preparationTime, recordingTime, onPrev, onNext, isFirstPrompt, isLastPrompt }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Adjust for small screens

  return (
    <ThemeProvider theme={customTheme}>
      <Box
        display="flex"
        flexDirection={isSmallScreen ? 'column' : 'row'}
        justifyContent={isSmallScreen ? 'center' : 'space-between'}
        alignItems={isSmallScreen ? 'center' : 'center'}
        p={2}
        border={1}
        borderColor="grey.300"
        borderRadius={2}
        boxShadow={1}
        bgcolor="#f9f9f9"
        gap={isSmallScreen ? 2 : 0} // Adds spacing between elements in column layout
      >
        {/* Task Info */}
        <Box mb={isSmallScreen ? 1 : 0} textAlign={isSmallScreen ? 'center' : 'left'}>
          <Typography variant="h6" component="div" fontWeight="bold">
            {taskType} - {title}
          </Typography>
        </Box>

        {/* Timing Info */}
        <Box mb={isSmallScreen ? 2 : 0} textAlign={isSmallScreen ? 'center' : 'left'}>
  <Typography variant="body1" component="div">
    {recordingTime === "" ? `Time allowed: ${preparationTime}` : `Preparation Time: ${preparationTime} sec`}
  </Typography>
  {/* Conditionally render Recording Time only if it's not an empty string */}
  {recordingTime !== "" && (
    <Typography variant="body1" component="div">
      Recording Time: {recordingTime} sec
    </Typography>
  )}
</Box>

        {/* Navigation Buttons */}
        <Box display="flex" flexDirection={isSmallScreen ? 'column' : 'row'} gap={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={onPrev}
            disabled={isFirstPrompt}
            fullWidth={isSmallScreen} // Full width for small screens
          >
            PREV
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onNext}
            disabled={isLastPrompt}
            fullWidth={isSmallScreen} // Full width for small screens
          >
            NEXT
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PracticePageHeader;
