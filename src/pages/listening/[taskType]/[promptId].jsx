import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '../../../Common/Sidebar';
import CentralControl from '../../../ListeningCelpip/CentralControl';
import { celpip_listening_tasks_info } from '../../../data';

const ListeningPromptPage = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { taskType, promptId } = router.query;

  useEffect(() => {
    if (taskType) {
      const task = celpip_listening_tasks_info.find(
        (t) => t.task_type.replace(/\s+/g, '') === taskType
      );
      if (task) {
        setSelectedTask(task);
      }
      setLoading(false);
    }
  }, [taskType]);

  const handleTaskSelect = (task) => {
    setSelectedTask(task);
  };

  const handleBack = () => {
    router.push(`/listening/${taskType}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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
        selectedPrompt={promptId}
      />
    </div>
  );
};

export default ListeningPromptPage; 