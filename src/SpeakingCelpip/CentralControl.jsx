import React, { useState, useEffect, useCallback } from "react";
import TaskList from "./TaskList";
import PromptList from "./PromptList";
import PracticePage_Base from "./PracticePage_Base";
import BackLink from "./BackLink";
import { useRouter } from "next/router"; // Use Next.js's useRouter hook

const CentralControl = ({
  selectedModule,
  moduleDesc,
  selectedTask,
  prompts,
  allPromptsData,
  onBack,
  onTaskSelect,
  loading,
  selectedPrompt,
}) => {
  const [currentPrompt, setCurrentPrompt] = useState(selectedPrompt);
  const [isNavigating, setIsNavigating] = useState(false);
  const router = useRouter();
  const { taskType, promptId } = router.query; // Access taskType and promptId from URL

  const handlePromptSelect = useCallback(
    async (prompt) => {
      if (isNavigating) return;
      
      try {
        setIsNavigating(true);
        setCurrentPrompt(prompt);
        const formattedTaskType = taskType?.replace(/\s+/g, '');
        await router.push(`/${selectedModule}/${formattedTaskType}/${prompt}`, undefined, {
          shallow: true
        });
      } catch (error) {
        console.error('Navigation error:', error);
      } finally {
        setIsNavigating(false);
      }
    },
    [router, selectedModule, taskType, isNavigating]
  );

  useEffect(() => {
    if (promptId && !isNavigating && promptId !== currentPrompt) {
      setCurrentPrompt(promptId);
    }
  }, [promptId, isNavigating, currentPrompt]);

  const handleBackToPromptList = async () => {
    if (isNavigating) return;
    
    try {
      setIsNavigating(true);
      await router.push(`/${selectedModule}/${taskType}/`, undefined, {
        shallow: true
      });
      setCurrentPrompt(null);
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setIsNavigating(false);
    }
  };

  if (selectedModule === "speaking" || selectedModule === "writing") {
    if (currentPrompt) {
      return (
        <PracticePage_Base
          selectedModule={selectedModule}
          selectedTaskType={selectedTask}
          allPromptList={prompts}
          allPromptsData={allPromptsData}
          selectedPrompt={currentPrompt}
          onBack={handleBackToPromptList}
        />
      );
    }
  }

  if (loading) {
    return <p>Loading task data...</p>; // Display loading message
  }

  if (selectedTask && prompts.length > 0) {
    return (
      <React.Fragment>
        <BackLink onBack={onBack} title="Back to Task Types" />
        <div className="central-control">
          <h3>
            {selectedModule} Module - {selectedTask}
          </h3>
          <PromptList
            prompts={prompts}
            onPromptSelect={handlePromptSelect}
            selectedModule={selectedModule}
            selectedTask={selectedTask}
          />
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="central-control">
      <h3>{selectedModule} Module</h3>
      <p style={{ color: "black" }}>{moduleDesc}</p>
      <TaskList selectedModule={selectedModule} onSelectTask={onTaskSelect} />
    </div>
  );
};

export default CentralControl;
