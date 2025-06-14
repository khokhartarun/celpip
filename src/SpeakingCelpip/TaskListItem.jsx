import React from 'react';

const TaskListItem = ({ linkTitle, taskType, taskTitle, taskDescription, onClick }) => {
  return (
    <div className="task-list-item">
      <p>
        <strong>{taskType}:</strong>
        <span>{taskTitle}</span>: {taskDescription}
      </p>
      <a href="#" className="task-link" onClick={onClick}>{linkTitle}</a>
    </div>
  );
};

export default TaskListItem;
