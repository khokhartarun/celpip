import React from 'react';
import { Typography, Box } from "@mui/material";
import Link from 'next/link'; // Import Link from next/link
import Sidebar from "../Common/Sidebar";

const PreparationTips = () => {
  return (
    <div className="reading">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <div className="central-control">
          <Box sx={{ textAlign: "justify" }}>
            {/* General Tips Heading */}
            <Typography variant="h5" gutterBottom>
              <strong>General Tips for CELPIP Preparation:</strong>
            </Typography>

            {/* General Tips Content */}
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>
                <Typography>
                  <strong>Understand the Test Format:</strong> Familiarize yourself with the structure of each test section (Listening, Reading, Writing, and Speaking). Knowing what to expect will help you manage your time effectively during the test.
                  <br />
                  <Link href="/testformat" passHref>
                    <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                      Check Test Format
                    </Typography>
                  </Link>
                </Typography>
              </li>
              <br />

              <li>
                <Typography>
                  <strong>Enhance Your Speaking Skills:</strong> Practice speaking English in everyday situations. Record yourself and listen for areas where you can improve your pronunciation, fluency, and coherence.
                  <br />
                  <Link href="/speaking" passHref>
                    <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                      Practice Speaking
                    </Typography>
                  </Link>
                </Typography>
              </li>
              <br />

              <li>
                <Typography>
                  <strong>Work on Your Writing:</strong> Practice writing emails, essays, and responses to survey questions. Focus on organizing your thoughts clearly and using a variety of sentence structures.
                  <br />
                  <Link href="/writing" passHref>
                    <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                      Practice Writing Tasks
                    </Typography>
                  </Link>
                </Typography>
              </li>
              <br />

              {/* More content */}
            </ul>
            <br />
            {/* Specific Section Tips */}
            <Typography variant="h5" gutterBottom>
              <strong>Specific Section Tips:</strong>
            </Typography>
            <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
              <li>
                <Typography>
                  <strong>Listening:</strong> Take notes while listening to the audio. Focus on understanding the main ideas and details.
                  <br />
                  <p>For more details about Listening Test
                    <Link href="/listening" passHref>
                      <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                        Click here
                      </Typography>
                    </Link>
                  </p>
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>Reading:</strong> Skim through the passage first to get the gist, then read it carefully to answer the questions.
                  <br />
                  <p>For more details about Reading Test
                    <Link href="/reading" passHref>
                      <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                        Click here
                      </Typography>
                    </Link>
                  </p>
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>Writing:</strong> Plan your response before you start writing. Ensure your ideas are well-organized and clearly presented.
                  <p>For more details about Writing Test
                    <Link href="/writing" passHref>
                      <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                        Click here
                      </Typography>
                    </Link>
                  </p>
                </Typography>
              </li>
              <li>
                <Typography>
                  <strong>Speaking:</strong> Speak clearly and at a natural pace. Don’t rush, and make sure to fully answer the prompts.
                  <p>For more details about Speaking Test
                    <Link href="/speaking" passHref>
                      <Typography component="a" sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                        Click here
                      </Typography>
                    </Link>
                  </p>
                </Typography>
              </li>
            </ul>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default PreparationTips;
