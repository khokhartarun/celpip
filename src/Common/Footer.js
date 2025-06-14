import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <Typography variant="body2" gutterBottom>
        The practice tests for reading, writing, speaking, and listening
        available on this site are designed to closely replicate the IELTS
        format for preparation purposes. Please note, these are not official
        IELTS exams.
      </Typography>
      <Typography variant="body2" gutterBottom>
        IELTS® is a registered trademark of the British Council, IDP: IELTS
        Australia, and Cambridge ESOL. This website is not affiliated with,
        endorsed by, or approved by these organizations. All trademarks
        mentioned are the property of their respective owners.
      </Typography>
      <Typography variant="body2" gutterBottom>
        By using this site, you acknowledge and agree to our{" "}
        <Link href="/terms-of-use">terms of use</Link>, as well as our{" "}
        <Link href="/cookie-policy">cookie</Link> and{" "}
        <Link href="/privacy-policy">privacy policies</Link>.
      </Typography>
    </Box>
  );
};

export default Footer;
