import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Container, Paper, Button, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import { readingTasks } from '../../../data';

const ReadingTask = () => {
  const router = useRouter();
  const { taskType, taskId } = router.query;
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const task = readingTasks[taskType]?.find(t => t.id === parseInt(taskId));

  if (!task) {
    return (
      <Container>
        <Typography>Task not found</Typography>
      </Container>
    );
  }

  const handleAnswerSubmit = () => {
    setShowResult(true);
  };

  const handleNextTask = () => {
    const nextTaskId = parseInt(taskId) + 1;
    if (readingTasks[taskType]?.find(t => t.id === nextTaskId)) {
      router.push(`/reading/${taskType}/${nextTaskId}`);
    } else {
      router.push(`/reading/${taskType}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {taskType?.charAt(0).toUpperCase() + taskType?.slice(1)} Task {taskId}
      </Typography>
      
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Reading Passage
        </Typography>
        <Typography variant="body1" paragraph>
          {task.passage}
        </Typography>
      </Paper>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Question
        </Typography>
        <Typography variant="body1" paragraph>
          {task.question}
        </Typography>

        <FormControl component="fieldset">
          <RadioGroup
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          >
            {task.options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
                disabled={showResult}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {!showResult ? (
          <Button
            variant="contained"
            color="primary"
            onClick={handleAnswerSubmit}
            sx={{ mt: 2 }}
            disabled={!selectedAnswer}
          >
            Submit Answer
          </Button>
        ) : (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" color={selectedAnswer === task.correctAnswer ? 'success.main' : 'error.main'}>
              {selectedAnswer === task.correctAnswer ? 'Correct!' : 'Incorrect!'}
            </Typography>
            <Typography variant="body1" paragraph>
              Correct Answer: {task.correctAnswer}
            </Typography>
            <Typography variant="body1" paragraph>
              Explanation: {task.explanation}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNextTask}
            >
              Next Task
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default ReadingTask; 