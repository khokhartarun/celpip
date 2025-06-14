import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';

const readingTaskTypes = [
  {
    id: 'reading-for-information',
    title: 'Reading for Information',
    description: 'Practice reading and understanding factual information from various sources.'
  },
  {
    id: 'reading-for-main-idea',
    title: 'Reading for Main Idea',
    description: 'Develop skills in identifying the main idea and supporting details in texts.'
  },
  {
    id: 'reading-for-detail',
    title: 'Reading for Detail',
    description: 'Practice finding specific information and details in reading passages.'
  },
  {
    id: 'reading-for-inference',
    title: 'Reading for Inference',
    description: 'Learn to make inferences and draw conclusions from reading materials.'
  }
];

const ReadingIndex = () => {
  const router = useRouter();

  const handleTaskTypeClick = (taskTypeId) => {
    router.push(`/reading/${taskTypeId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        CELPIP Reading Practice
      </Typography>
      <Typography variant="body1" paragraph>
        Choose a reading task type to begin practicing:
      </Typography>
      
      <Grid container spacing={3}>
        {readingTaskTypes.map((taskType) => (
          <Grid item xs={12} md={6} key={taskType.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {taskType.title}
                </Typography>
                <Typography variant="body1" paragraph>
                  {taskType.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleTaskTypeClick(taskType.id)}
                >
                  Start Practice
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReadingIndex; 