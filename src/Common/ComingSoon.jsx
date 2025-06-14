import React from 'react';
import { Box, Button, Link } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const ComingSoon = () => {
  return (
    <React.Fragment>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        my: 2, // Adds vertical margin
      }}
    >
      <Button
        variant="outlined"
        color="secondary"
        startIcon={<AccessTimeIcon />}
        disabled // Disables the button to indicate it's not yet active
      >
        Practice Sets Coming Soon
      </Button>
    </Box>
   {/* Links below the button */}
   <Box
   sx={{
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     gap: 3, // Adds space between the links
   }}
 >
   <Link href="/speaking" sx={{ fontWeight: 'bold', textDecoration: 'underline', color: 'primary.main' }}>
     Practice Speaking Samples
   </Link>
   <Link href="/writing" sx={{ fontWeight: 'bold', textDecoration: 'underline', color: 'primary.main' }}>
     Practice Writing Samples
   </Link>
 </Box>
 <br/>
 </React.Fragment>
);
};

export default ComingSoon;
