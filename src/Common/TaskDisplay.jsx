import { celpip_reading_tasks_info, celpip_listening_tasks_info } from "../data";
import { Typography, List, ListItem, Box, Divider } from "@mui/material";

const TaskDisplay = ({ selectedModule }) => {

    const tasks = selectedModule === 'reading' ? celpip_reading_tasks_info : celpip_listening_tasks_info;

    return (
        <Box>
            {tasks.map((task, index) => (
                <div key={index} className="task-list-item">
                    <p>
                        {/* Task Type and Title */}
                        <strong>{task.task_type}: {task.task_title}</strong>
                        <p>{task.task_description}</p>
                        <br />

                        {/* Key Points */}
                        <strong>Key Points:</strong>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginLeft: '10px' }}>
                            <li><strong>Duration:</strong> {task.key_points.duration}</li>
                            
                            {/* Conditional check based on selectedModule */}
                            {selectedModule === 'reading' ? (
                                <li><strong>Total Questions:</strong> {task.key_points.focus}</li>
                            ) : (
                                <li><strong>Focus:</strong> {task.key_points.focus}</li>
                            )}

                            <li><strong>Tips:</strong> {task.key_points.tip}</li>
                        </ul>
                    </p>
                    <br />
                    <Divider />
                </div>
            ))}
        </Box>
    );
};

export default TaskDisplay;
