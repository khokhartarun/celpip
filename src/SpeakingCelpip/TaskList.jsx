import React from "react";
import { celpip_speaking_tasks_info, celpip_writing_tasks_info } from "../data";
import TaskListItem from "./TaskListItem";

const TaskList = ({ selectedModule, onSelectTask }) => {
  // Determine which task list to use based on the selected module
  const taskList =
    selectedModule === "writing"
      ? celpip_writing_tasks_info
      : celpip_speaking_tasks_info;

  console.log("selectedModule:", selectedModule); // Log the task list for debugging

  return (
    <div className="task-list">
      {taskList.map((task, index) => (
        <TaskListItem
          key={index}
          linkTitle={task.link_title}
          taskType={task.task_type}
          taskTitle={task.task_title}
          taskDescription={task.task_description}
          onClick={() => onSelectTask(task.task_type_without_space)}
        />
      ))}
    </div>
  );
};

export default TaskList;
