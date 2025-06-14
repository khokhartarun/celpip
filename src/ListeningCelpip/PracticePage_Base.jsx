import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import BackLink from './BackLink';

const PracticePage_Base = ({
  selectedModule,
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  const [currentPrompt, setCurrentPrompt] = useState(null);

  useEffect(() => {
    if (selectedPrompt && allPromptsData) {
      const prompt = allPromptsData.find(p => p.id === selectedPrompt);
      setCurrentPrompt(prompt);
    }
  }, [selectedPrompt, allPromptsData]);

  if (!currentPrompt) {
    return <div>Loading prompt...</div>;
  }

  return (
    <Box>
      <BackLink onBack={onBack} title="Back to Prompts" />
      <div className="practice-page">
        <Typography variant="h4" gutterBottom>
          {selectedModule} - {selectedTaskType}
        </Typography>
        
        <Box sx={{ my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Prompt:
          </Typography>
          <Typography variant="body1" paragraph>
            {currentPrompt.description}
          </Typography>
        </Box>

        {/* Audio player will be added here */}
        <Box sx={{ my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Audio:
          </Typography>
          <audio controls>
            <source src={currentPrompt.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Box>

        {/* Questions will be added here */}
        <Box sx={{ my: 3 }}>
          <Typography variant="h6" gutterBottom>
            Questions:
          </Typography>
          {currentPrompt.questions?.map((question, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">
                {index + 1}. {question.text}
              </Typography>
              {/* Question options will be added here */}
            </Box>
          ))}
        </Box>
      </div>
    </Box>
  );
};

export default PracticePage_Base; 