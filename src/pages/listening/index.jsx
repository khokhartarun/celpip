import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../Common/Sidebar';
import CentralControl from '../../ListeningCelpip/CentralControl';
import { celpip_listening_tasks_info } from '../../data';

const ListeningPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleBack = () => {
    setSelectedTask(null);
  };

  return (
    <div className="reading">
      <Sidebar className="sidebar" />
      <CentralControl
        selectedModule="listening"
        moduleDesc="The CELPIP Listening Test is designed to assess your ability to understand spoken English in everyday situations. The test consists of six parts, each focusing on different listening scenarios."
        selectedTask={selectedTask}
        prompts={[]}
        allPromptsData={[]}
        onBack={handleBack}
        onTaskSelect={handleTaskSelect}
        loading={loading}
      />
    </div>
  );
};

export default ListeningPage; 