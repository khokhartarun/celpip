import React from 'react';
import { celpip_listening_tasks_info } from '../data';
import { List, ListItem, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

const TaskList = ({ selectedModule, onSelectTask }) => {
  const router = useRouter();

  const handleTaskClick = (task) => {
    const formattedTaskType = task.task_type.replace(/\s+/g, '');
    router.push(`/${selectedModule}/${formattedTaskType}`);
    onSelectTask(task);
  };

  return (
    <List>
      {celpip_listening_tasks_info.map((task, index) => (
        <ListItem key={index} divider onClick={() => handleTaskClick(task)} style={{ cursor: 'pointer' }}>
          <ListItemText
            primary={
              <div>
                <strong>{task.task_type}: {task.task_title}</strong>
                <p>{task.task_description}</p>
                <div>
                  <strong>Key Points:</strong>
                  <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginLeft: '10px' }}>
                    <li><strong>Duration:</strong> {task.key_points.duration}</li>
                    <li><strong>Focus:</strong> {task.key_points.focus}</li>
                    <li><strong>Tips:</strong> {task.key_points.tip}</li>
                  </ul>
                </div>
              </div>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList; 