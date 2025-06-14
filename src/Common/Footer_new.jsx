import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer_New = () => {
    return (
        <Box
          sx={{
            backgroundColor: '#301a52', // Primary dark blue color
            color: '#fff', // White text color
            padding: '20px',
            textAlign: 'center',
            marginTop:'50px'
          }}
        >
          {/* Quick Links in Horizontal Bar */}
          <Grid container justifyContent="center" spacing={2} sx={{ marginBottom: '20px' }}>
            <Grid item>
              <Link href="/testdetails" underline="hover" color="inherit">
                Test Details
              </Link>
            </Grid>
            <Grid item>
              <Link href="/speaking" underline="hover" color="inherit">
                Speaking
              </Link>
            </Grid>
            <Grid item>
              <Link href="/writing" underline="hover" color="inherit">
                Writing
              </Link>
            </Grid>
            <Grid item>
              <Link href="/listening" underline="hover" color="inherit">
                Listening
              </Link>
            </Grid>
            <Grid item>
              <Link href="/reading" underline="hover" color="inherit">
                Reading
              </Link>
            </Grid>
            <Grid item>
              <Link href="/FAQs" underline="hover" color="inherit">
                FAQs
              </Link>
            </Grid>
          </Grid>
    
          {/* Disclaimer Section */}
          <Typography variant="body2"  sx={{ marginBottom: 2 }}>
            The practice tests on this site are designed for CELPIP preparation purposes only. CELPIP® is a registered trademark of Paragon Testing Enterprises. This site is not affiliated with or endorsed by Paragon Testing Enterprises.
          </Typography>
    
          {/* Copyright Section */}
          <Box sx={{ borderTop: '1px solid #fff', paddingTop: 2 }}>
            <Typography variant="body2">
              &copy; {new Date().getFullYear()} CELPIP Prep. All rights reserved.
            </Typography>
          </Box>
        </Box>
      );
    };

export default Footer_New;
