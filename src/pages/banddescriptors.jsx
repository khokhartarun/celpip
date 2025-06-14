import React from "react";
import { Typography, Box } from "@mui/material";
import Sidebar from "../Common/Sidebar";
import Link from "next/link"; // Import Link from Next.js

const BandDescriptors = () => {
  return (
    <div className="reading">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <div className="central-control">
          <Box sx={{ textAlign: "justify" }}>
            {/* CELPIP Band Scores Introduction */}
            <Typography variant="h5" gutterBottom>
              <strong>CELPIP Band Scores:</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              CELPIP uses a 12-point scale to assess your English language proficiency across Listening, Reading, Writing, and Speaking. Each band score corresponds to a specific level of language ability, ranging from minimal proficiency to advanced proficiency.
            </Typography>

            {/* Link to CLB comparison and Scoring Criteria using Next.js Link component */}
            <Link href="/clbcomparison" passHref>
              <Typography
                sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}
              >
                Check CLB comparison
              </Typography>
            </Link>
            <br />
            <Link href="/scoringcriteria" passHref>
              <Typography
                sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}
              >
                Understand Scoring Criteria
              </Typography>
            </Link>
            <br />

            {/* Band Score Breakdown */}
            <br />
            <Typography variant="h5" gutterBottom>
              <strong>Band Score Breakdown:</strong>
            </Typography>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>
                <Typography>
                  <strong>CELPIP 12: Advanced Proficiency</strong> – Demonstrates near-native English skills, with a thorough understanding and command of the language in complex situations.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 11: Superior Proficiency</strong> – Excellent grasp of the language, with the ability to handle complex tasks effectively in professional and social contexts.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 10: High Proficiency</strong> – Strong command of the language, capable of managing intricate and detailed communication in professional and social environments.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 9: Strong Proficiency</strong> – Effective communication skills in most professional settings, capable of understanding and expressing complex ideas.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 8: Good Proficiency</strong> – Can function well in professional and social situations, with the ability to understand and convey detailed information.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 7: Adequate Proficiency</strong> – Sufficient language skills for basic communication in common situations, with the ability to understand and express routine ideas.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 6: Developing Proficiency</strong> – Basic communication skills with some limitations, suitable for routine tasks and interactions in familiar contexts.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 5: Marginal Proficiency</strong> – Limited ability to communicate in familiar situations, with significant challenges in expressing and understanding more complex ideas.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 4: Minimal Proficiency</strong> – Basic understanding and ability to communicate in very simple and familiar situations.
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>CELPIP 3 and Below: Very Limited Proficiency</strong> – Extremely limited language skills, with difficulty functioning in English in most situations.
                </Typography>
              </li>
            </ul>
            <br />
            {/* Understanding Your Score */}
            <Typography variant="h5" gutterBottom>
              <strong>Understanding Your Score:</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              {"Each score band represents your ability to understand, communicate, and function in English. Higher band scores indicate a greater proficiency and readiness to handle more complex communication tasks, which is crucial for achieving your goals in Canada, whether it's for immigration, employment, or education."}
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default BandDescriptors;
