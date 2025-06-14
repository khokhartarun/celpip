import React from 'react';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackLink = ({ onBack, title }) => {
  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={onBack}
      sx={{ mb: 2 }}
    >
      {title}
    </Button>
  );
};

export default BackLink; 