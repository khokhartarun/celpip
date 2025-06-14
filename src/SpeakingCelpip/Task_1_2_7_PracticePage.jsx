import React, { useEffect, useState } from "react";
import PracticePageHeader from "./PracticePageHeader";
import PromptDetails from "./PromptDetails";
import BackLink from "./BackLink";
import OneSampleAnswer from "./OneSampleAnswer";
import TwoSampleAnswers from "./TwoSampleAnswers";
import { celpip_speaking_tasks_info } from "../data";

const Task_1_2_7_PracticePage = ({
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
    const taskData = celpip_speaking_tasks_info.find(
      (task) => task.task_type_without_space === selectedTaskType
    );
    setTaskInfo(taskData);

    // Extract the prompt details from allPromptsData based on selectedPromptID
    const promptData = allPromptsData.find(
      (item) => item.PromptID === selectedPromptID
    );
    if (promptData) {
      setPromptDetails(promptData);
    } else {
      console.error(`Prompt data not found for ID: ${selectedPromptID}`);
    }
  }, [selectedTaskType, selectedPromptID, allPromptsData]);

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

  if (!taskInfo || !promptDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="prompt-detail-page">
      <PracticePageHeader
        taskType={taskInfo.task_type}
        title={taskInfo.task_title}
        preparationTime={taskInfo.preparationTime}
        recordingTime={taskInfo.recordingTime}
        onPrev={handlePreviousClick}
        onNext={handleNextClick}
        isFirstPrompt={currentPromptIndex === 0}
        isLastPrompt={currentPromptIndex === allPromptList.length - 1}
      />
      <div>
        <PromptDetails
          promptTitle={promptDetails.prompt}
          promptPointers={promptDetails.prompt_pointers}
        />
        <OneSampleAnswer
          sample_answer={promptDetails.sample_answer}
          important_keywords={promptDetails.important_keywords}
          PromptID={selectedPromptID}
        />
      </div>
    </div>
  );
};

export default Task_1_2_7_PracticePage;
