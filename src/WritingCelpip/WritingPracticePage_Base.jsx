import React, { useState, useEffect } from "react";
import BackLink from "../SpeakingCelpip/BackLink";
import PracticePageHeader from "../SpeakingCelpip/PracticePageHeader";
import PromptDetails from "../SpeakingCelpip/PromptDetails";
import { celpip_writing_tasks_info } from "../data";
import OneSampleAnswer from "../SpeakingCelpip/OneSampleAnswer";
import W_Task1_PracticePage from "./W_Task1_PracticePage"; // Import Task1 component
import W_Task2_PracticePage from "./W_Task2_PracticePage";

const WritingPracticePage_Base = ({
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  const [promptDetails, setPromptDetails] = useState(null);
  const [selectedPromptID, setSelectedPromptID] = useState(selectedPrompt);
  const [taskInfo, setTaskInfo] = useState({});

  let currentPromptIndex = allPromptList.indexOf(selectedPromptID);

  useEffect(() => {
    // Fetch task info based on selected task
    const taskData = celpip_writing_tasks_info.find(
      (task) => task.task_type_without_space === selectedTaskType
    );
    setTaskInfo(taskData);

    // Extract the prompt details from allPromptsData based on selectedPromptID
    const promptData = allPromptsData.find(
      (item) => item.PromptID === selectedPromptID
    );
    setPromptDetails(promptData);
  }, [selectedTaskType, allPromptList, currentPromptIndex, selectedPromptID, allPromptsData]);

  const handleNextClick = () => {
    if (currentPromptIndex < allPromptList.length - 1) {
      const newIndex = currentPromptIndex + 1;
      setSelectedPromptID(allPromptList[newIndex]);
    }
  };

  const handlePreviousClick = () => {
    if (currentPromptIndex > 0) {
      const newIndex = currentPromptIndex - 1;
      setSelectedPromptID(allPromptList[newIndex]);
    }
  };

  return (
    <div className="prompt-detail-page">
      {taskInfo && (
        <PracticePageHeader
          taskType={taskInfo.task_type}
          title={taskInfo.task_title}
          preparationTime={taskInfo.time_allowed}
          recordingTime=""
          onPrev={handlePreviousClick}
          onNext={handleNextClick}
          isFirstPrompt={currentPromptIndex === 0}
          isLastPrompt={currentPromptIndex === allPromptList.length - 1}
        />
      )}
      {promptDetails ? (
        <div>
          {/* Conditional rendering using ternary operator */}
          {selectedTaskType === "Task1" ? (
            <W_Task1_PracticePage promptDetails={promptDetails} />
          ) : selectedTaskType === "Task2" ? (
            <W_Task2_PracticePage promptDetails={promptDetails} />
          ) : (
            <p>No task selected or task type not recognized.</p>
          )}
        </div>
      ) : (
        <p>Loading prompt details...</p>
      )}
    </div>
  );
};

export default WritingPracticePage_Base;
