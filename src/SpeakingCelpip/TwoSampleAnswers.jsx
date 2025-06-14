import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TwoSampleAnswers = ({
  sample_answer,
  important_keywords,
  sample_answer_option_b,
  important_keywords_option_b,
  text1,
  text2,
}) => {
  return (
    <div className="sample-answers-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{text1}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            <strong>Important Keywords:</strong>
          </Typography>
          <Typography className="no-select">{important_keywords}</Typography>
          <Typography variant="subtitle1" style={{ marginTop: "1rem" }}>
            <strong>Sample Answer:</strong>
          </Typography>
          <Typography className="no-select" style={{ whiteSpace: "pre-line" }}>
            {sample_answer}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>{text2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="subtitle1">
            <strong>Important Keywords:</strong>
          </Typography>
          <Typography>{important_keywords_option_b}</Typography>
          <Typography variant="subtitle1" style={{ marginTop: "1rem" }}>
            <strong>Sample Answer:</strong>
          </Typography>
          <Typography style={{ whiteSpace: "pre-line" }}>
            {sample_answer_option_b}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TwoSampleAnswers;
