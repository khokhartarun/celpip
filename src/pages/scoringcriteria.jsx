import React from "react";
import { Typography, Box } from "@mui/material";
import Sidebar from "../Common/Sidebar";
import Image from 'next/image';

const ScoringCriteria = () => {
  return (
    <div className="reading">
            <Sidebar className="sidebar" />
            <div className="central-control">
            <div className="central-control">
    <Box sx={{ textAlign: "justify" }}>
      {/* Introduction */}
      <Typography variant="h5" gutterBottom>
        <strong>How CELPIP is Scored?</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        The CELPIP test is designed to evaluate your English language proficiency comprehensively. Each component (Listening, Reading, Writing, and Speaking) is scored based on specific criteria, ensuring a fair and accurate assessment of your abilities.
      </Typography>
      

      {/* Listening and Reading Scoring */}
      <Typography variant="h5" gutterBottom>
        <strong>Listening and Reading Scoring:</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Objective Scoring:</strong> The Listening and Reading sections are scored automatically by the computer. Your score is based on the number of correct answers, which are then converted into the CELPIP scale.
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Item Difficulty:</strong> The test includes a mix of easy, medium, and hard questions, and your score reflects the difficulty level of the questions you answered correctly.
      </Typography>

      {/* Image placeholders */}
      <Box sx={{ textAlign: "center", margin: "20px 0" }}>
        <Image
          src='/images/listening_score.png'
          alt="Listening Score Chart"
          width={600} height={400}
          style={{ maxWidth: "100%", height: "auto", marginBottom: "20px" }}
        />
        <Image
          src='/images/reading_score.png'
          alt="Reading Score Chart"
          width={600} height={400}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Typography variant="body2" paragraph>
        <strong>Disclaimer:</strong> This example chart shows how scores in the Listening Test and Reading Test approximately correspond to CELPIP Levels. Since questions may have different levels of difficulty and may therefore be equated differently, the raw score required for a certain level may vary slightly from one test to another.
      </Typography>

<br/>
      {/* Writing Scoring Criteria */}
      <Typography variant="h5" gutterBottom>
        <strong>Writing Scoring Criteria:</strong>
      </Typography>
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <Typography>
            <strong>Task Achievement:</strong> Your ability to respond effectively to the prompt, covering all the required points.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Coherence and Cohesion:</strong> How well your ideas are organized and connected, including the logical flow of your writing.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Lexical Resource:</strong> The range and accuracy of your vocabulary, including your ability to use appropriate words and phrases.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Grammatical Range and Accuracy:</strong> The variety and correctness of your grammar, including sentence structure, verb tenses, and punctuation.
          </Typography>
        </li>
      </ul>
<br/>
      {/* Speaking Scoring Criteria */}
      <Typography variant="h5" gutterBottom>
        <strong>Speaking Scoring Criteria:</strong>
      </Typography>
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <Typography>
            <strong>Task Achievement:</strong> Your ability to respond appropriately to the questions and prompts.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Coherence and Cohesion:</strong> How clearly and logically you present your ideas, including the smoothness of your speech.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Lexical Resource:</strong> The range and accuracy of your spoken vocabulary, including the use of idiomatic expressions and phrases.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Grammatical Range and Accuracy:</strong> The correctness of your grammar, including sentence structure, verb tenses, and pronunciation.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Fluency and Pronunciation:</strong> The smoothness of your speech and clarity of pronunciation, including intonation and rhythm.
          </Typography>
        </li>
      </ul>
      <br/>
      {/* Score Reporting */}
      <Typography variant="h5" gutterBottom>
        <strong>Score Reporting:</strong>
      </Typography>
      <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
        <li>
          <Typography>
            <strong>Detailed Report:</strong> You will receive a detailed score report that breaks down your performance in each section, helping you understand your strengths and areas for improvement.
          </Typography>
        </li>
        <li>
          <Typography>
            <strong>Re-scoring Option:</strong> If you believe your scores do not reflect your true abilities, you can request a re-scoring of the Writing and Speaking sections for an additional fee. The re-scroing results are available within 1 to 2 weeks.
          </Typography>
        </li>
      </ul>
    </Box>
    </div>
    </div>
    </div>
  );
};

export default ScoringCriteria;
