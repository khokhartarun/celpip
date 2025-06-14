import { Typography, Box } from "@mui/material";
import Sidebar from "../Common/Sidebar";
import Image from 'next/image';

const CLBComparison = () => {
  return (
    <div className="reading">
            <Sidebar className="sidebar" />
            <div className="central-control">
            <div className="central-control">
    <Box sx={{ textAlign: "justify" }}>
      {/* CLB Introduction */}
      <Typography variant="h5" gutterBottom>
        <strong>What is CLB?</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        The <strong>Canadian Language Benchmarks (CLB)</strong> are a national
        standard used in Canada to describe, measure, and recognize the English
        language proficiency of adult immigrants and prospective immigrants for
        living and working in Canada.
      </Typography>

      {/* CELPIP and CLB Levels Section */}
      <Typography variant="h5" gutterBottom>
      <strong> CELPIP and CLB Levels:</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        CELPIP scores are mapped to <strong>CLB levels</strong>, which are
        widely recognized for immigration, education, and professional
        certification purposes.
      </Typography>

      {/* Score Comparison */}
      <Typography variant="h5" gutterBottom>
      <strong>Score Comparison:</strong>
      </Typography>
      <ul>
        <li>
          <Typography><strong>CELPIP 12:</strong> CLB Level 12 – Advanced proficiency, near-native speaker ability.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 11:</strong> CLB Level 11 – Very strong proficiency.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 10:</strong> CLB Level 10 – Strong proficiency.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 9: </strong>CLB Level 9 – Effective proficiency for professional purposes.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 8: </strong>CLB Level 8 – Good proficiency for most purposes.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 7: </strong>CLB Level 7 – Adequate proficiency for basic social interactions.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 6:</strong> CLB Level 6 – Developing proficiency with limitations.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 5: </strong>CLB Level 5 – Basic proficiency with significant limitations.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 4: </strong>CLB Level 4 – Limited proficiency; functional in familiar contexts.</Typography>
        </li>
        <li>
          <Typography><strong>CELPIP 3 and below: </strong>Below CLB 4 – Very limited proficiency, not functional.</Typography>
        </li>
      </ul>
      <br/>

      {/* CELPIP Levels & CLB Level Equivalencies Section */}
      <Typography variant="h5" gutterBottom>
        <strong>CELPIP Levels & CLB Level Equivalencies</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Below is a visual representation of CELPIP Levels & CLB Level Equivalencies:
      </Typography>
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Image
          src='/images/CLB_equivalency.png'
          alt="CELPIP and CLB Level Comparison"
          width={600} height={400}
          style={{ maxWidth: "90%", height: "auto" }}
        /> <br/>
        <p>Image taken from Official CELPIP website.</p>
      </Box>

<br/>
      {/* Usage of CLB Levels */}
      <Typography variant="h5" gutterBottom>
        <strong>Usage of CLB Levels:</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        CLB levels are used by immigration authorities to assess language skills
        for:
      </Typography>
      <ul style={{ listStyleType: "disc", marginLeft: "40px" }}>
        <li>
          <Typography>Canadian citizenship</Typography>
        </li>
        <li>
          <Typography>Permanent residency</Typography>
        </li>
        <li>
          <Typography>Professional licensing</Typography>
        </li>
      </ul>
<br/>
      <Typography variant="body1" paragraph>
        Understanding the correlation between <strong>CELPIP scores</strong> and
        <strong> CLB levels</strong> helps test-takers know where they stand in
        terms of their English language proficiency.
      </Typography>
    </Box>
    </div>
    </div>
    </div>
  );
};

export default CLBComparison;
