import React from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, Container, Grid, Card, CardContent, Button } from '@mui/material';
import { readingTasks } from '../../../data';

const ReadingTaskType = () => {
  const router = useRouter();
  const { taskType } = router.query;

  const tasks = readingTasks[taskType] || [];

  const handleTaskClick = (taskId) => {
    router.push(`/reading/${taskType}/${taskId}`);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {taskType?.charAt(0).toUpperCase() + taskType?.slice(1)} Tasks
      </Typography>
      <Grid container spacing={3}>
        {tasks.map((task) => (
          <Grid item xs={12} md={6} key={task.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Task {task.id}
                </Typography>
                <Typography variant="body1" paragraph>
                  {task.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleTaskClick(task.id)}
                >
                  Start Task
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReadingTaskType; 