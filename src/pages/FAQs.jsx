import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Sidebar from "../Common/Sidebar";
import Box from "@mui/material/Box";


const FAQs = () => {
  return (
    <div className="faq-page" style={{display:"flex"}}>
      {/* Sidebar */}
      <Sidebar className="sidebar" />

      <div className="central-control">
        <Typography variant="h4" gutterBottom>
          FAQs | CELPIP Exam
        </Typography>
        <Typography variant="body1" color="text.primary" paragraph>
          Find answers to the most commonly asked questions about the CELPIP exam. Explore the questions below for quick solutions and helpful information.
        </Typography>

        {/* FAQ 1 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What is the CELPIP Test?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The CELPIP (Canadian English Language Proficiency Index Program) test is an English language proficiency test designed to assess your ability to use English in everyday situations. It is widely accepted for immigration, citizenship, and professional designation purposes in Canada.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 2 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What are the different types of CELPIP tests?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography gutterBottom>
              There are two types of CELPIP tests:
            </Typography>
            <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
              <li>
                <strong>CELPIP-General:</strong> Assesses Listening, Reading, Writing, and Speaking skills. It is used for permanent residency applications and some professional designations.
              </li>
              <li>
                <strong>CELPIP-General LS:</strong> Assesses Listening and Speaking skills only. It is used primarily for Canadian citizenship applications.
              </li>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 3 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How long is the CELPIP test?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box component="ul" sx={{ pl: 4, listStyleType: 'disc' }}>
              <li>
                <strong>CELPIP-General:</strong> The test takes about 3 hours to complete and is done in one sitting.
              </li>
              <li>
                <strong>CELPIP-General LS:</strong> The test takes about 1 hour and 10 minutes.
              </li>
            </Box>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 4 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How is the CELPIP test scored?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The CELPIP test uses a 12-point scale, with each skill (Listening, Reading, Writing, and Speaking) receiving a score from 1 to 12. Scores are based on specific criteria for each section, and the test is designed to assess proficiency in Canadian English.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 5 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I reschedule or cancel my CELPIP test?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you can reschedule or cancel your test up to 9 days before your test date. However, there is a fee for rescheduling or canceling. If you cancel more than 9 days before your test date, you may be eligible for a partial refund.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 6 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Are there any accommodations for test-takers with disabilities?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, CELPIP provides accommodations for test-takers with disabilities. You can request accommodations during the registration process. Supporting documentation may be required.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 7 */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How can I prepare for the CELPIP test?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              There are various preparation resources available, including sample questions, practice tests, study guides, and preparation courses. Regular practice and familiarity with the test format are key to success.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </div>
  );
};

export default FAQs;
