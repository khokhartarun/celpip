import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const PromptList = ({ prompts, onPromptSelect, selectedModule, selectedTask }) => {
  return (
    <List>
      {prompts.map((prompt, index) => (
        <ListItem key={index} divider>
          <ListItemText
            primary={
              <div>
                <strong>Prompt {index + 1}</strong>
                <p>{prompt.description}</p>
              </div>
            }
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => onPromptSelect(prompt.id)}
          >
            Start Practice
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default PromptList; 