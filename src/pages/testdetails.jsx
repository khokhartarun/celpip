import React from "react";
import { Typography, Box, Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import Sidebar from "../Common/Sidebar";

export default function TestDetails() {
  return (
    <div className="reading">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <Box sx={{ textAlign: "justify" }}>
          <Typography variant="h5" gutterBottom>
            <strong>Introduction to CELPIP:</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            CELPIP (Canadian English Language Proficiency Index Program) is a general English language proficiency test designed for people looking to work, study, or immigrate to Canada. It's recognized by various organizations, including Immigration, Refugees and Citizenship Canada (IRCC), and the Real Estate Council of British Columbia.
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Types of CELPIP Tests:</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>CELPIP-General:</strong> The CELPIP-General test assesses functional language proficiency in a workplace and community context. It is commonly used for permanent residency applications and professional designations.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>CELPIP-General LS:</strong> This test is a listening and speaking test and is often required for Canadian citizenship applications.
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Test Components:</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>CELPIP-General</strong> evaluates four skills: Listening, Reading, Writing, and Speaking.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>CELPIP-General LS</strong> evaluates two skills: Listening and Speaking.
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Test Duration:</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            The CELPIP-General test takes about 3 hours to complete, with all components done in one sitting.
          </Typography>
          <Typography variant="body1" gutterBottom>
            The CELPIP-General LS test takes about 1 hour to complete.
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Why Choose CELPIP?</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            CELPIP is fully computer-delivered, offering quick results and a comfortable test-taking environment. The test format is user-friendly, with features like a word count tracker and spell check for the writing tasks.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Canadian Context:</strong> CELPIP is tailored specifically to Canadian English, making it an ideal choice for those planning to live and work in Canada.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Computer-Delivered Test:</strong> Enjoy a fully computerized testing experience with features like spell check, word count, and easy-to-use navigation.
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Single Sitting:</strong> Complete the entire test in one sitting, with no separate speaking appointments.
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Who Accepts CELPIP?</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Immigration, Refugees and Citizenship Canada (IRCC):</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>Permanent Residency Applications</li>
            <li>Canadian Citizenship Applications</li>
          </Box>

          <Typography variant="body1" gutterBottom>
            <strong>Professional Licensing Bodies:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>College of Nurses of Ontario (CNO)</li>
            <li>Immigration Consultants of Canada Regulatory Council (ICCRC)</li>
            <li>Real Estate Council of British Columbia (RECBC)</li>
            <li>Pharmacy Examining Board of Canada (PEBC)</li>
            <li>British Columbia College of Nursing Professionals (BCCNP)</li>
          </Box>

          <Typography variant="body1" gutterBottom>
            <strong>Provincial Nominee Programs (PNP):</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>British Columbia PNP</li>
            <li>Alberta Immigrant Nominee Program (AINP)</li>
            <li>Ontario Immigrant Nominee Program (OINP)</li>
            <li>Manitoba PNP</li>
            <li>Saskatchewan Immigrant Nominee Program (SINP)</li>
            <li>Nova Scotia PNP</li>
            <li>New Brunswick PNP</li>
            <li>Prince Edward Island PNP</li>
          </Box>

          <Typography variant="body1" gutterBottom>
            <strong>Educational Institutions:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>Certain Canadian universities and colleges (varies by institution and program)</li>
          </Box>

          <Typography variant="body1" gutterBottom>
            <strong>Employers:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>Various Canadian employers across industries (depends on specific job requirements)</li>
          </Box>

          <Typography variant="body1" gutterBottom>
            <strong>Government Agencies:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li>Federal, provincial, and municipal government departments for immigration and employment purposes</li>
          </Box>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>How We Can Help You:</strong>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our website offers a wide range of resources to help you prepare effectively for the CELPIP test:
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>1. Sample Questions:</strong> Access a large collection of practice questions designed to help you prepare for both the Speaking and Writing tests.
            <br />
            <NextLink href="/speaking" passHref legacyBehavior>
              <MuiLink sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                Check Speaking Sample Questions
              </MuiLink>
            </NextLink>
            <br />
            <NextLink href="/writing" passHref legacyBehavior>
              <MuiLink sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                Check Writing Sample Questions
              </MuiLink>
            </NextLink>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>2. Speaking Test Sample Answers:</strong> Review example responses for various speaking tasks to better understand what examiners are looking for.
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>3. Writing Test Sample Answers:</strong> Explore detailed sample answers that demonstrate proper structure, grammar, and content for different types of writing tasks.
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>4. Realistic Test UI:</strong> Our test interface mirrors the actual CELPIP test, allowing you to practice in a similar environment to the real exam.
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>5. Test Preparation Tips:</strong> Find proven strategies and tips to help improve your performance on test day.
            <br />
            <NextLink href="/tips" passHref legacyBehavior>
              <MuiLink sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                Click here for Preparation Tips
              </MuiLink>
            </NextLink>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>6. Test Details:</strong> Understand the different CELPIP test types and which one is right for you.
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>7. Test Format:</strong> Get familiar with the test structure, including the Listening, Reading, Writing, and Speaking sections.
            <br />
            <NextLink href="/testformat" passHref legacyBehavior>
              <MuiLink sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                Click here for Test Format
              </MuiLink>
            </NextLink>
          </Typography>

          <Typography variant="body1" gutterBottom>
            <strong>8. CLB Comparison:</strong> Learn how your CELPIP scores map to the Canadian Language Benchmarks (CLB) levels.
            <br />
            <NextLink href="/clbcomparison" passHref legacyBehavior>
              <MuiLink sx={{ color: "#1976d2", fontWeight: "bold", textDecoration: "underline" }}>
                CLB Comparison
              </MuiLink>
            </NextLink>
          </Typography>

          <br />
          <Typography variant="h5" gutterBottom>
            <strong>Additional Resources:</strong>
          </Typography>
          <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
            <li><strong>Sample Question-Answers:</strong> Practice with sample questions and answers to build your confidence.</li>
            <li><strong>Band Descriptions:</strong> Detailed explanations of what each score band represents in terms of language ability.</li>
            <li><strong>Scoring Criteria:</strong> Insight into how your performance will be evaluated in each section.</li>
            <li><strong>Preparation Tips:</strong> Proven strategies and tips to enhance your test-taking skills.</li>
          </Box>
        </Box>
      </div>
    </div>
  );
}
