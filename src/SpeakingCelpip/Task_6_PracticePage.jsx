import React, { useState, useEffect } from "react";
import PracticePageHeader from "./PracticePageHeader";
import PromptDetails from "./PromptDetails";
import BackLink from "./BackLink";
import { celpip_speaking_tasks_info } from "../data";
import Task6Options from "./Task6Options";
import TwoSampleAnswers from "./TwoSampleAnswers";

const Task_6_PracticePage = ({
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  const [promptDetails, setPromptDetails] = useState(null);
  const [selectedPromptID, setSelectedPromptID] = useState(selectedPrompt); // Start with 30 seconds for preparation
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
    setPromptDetails(promptData);

    console.log("selected taskType:" + selectedTaskType);
    console.log("selectedPrompt:" + selectedPromptID);
    console.log("currPromptIndex:" + currentPromptIndex);
  }, [selectedTaskType, allPromptList, currentPromptIndex, allPromptsData, selectedPromptID]);

  const handleNextClick = () => {
    console.log("CurrentPromtIndex from handleNextCLic:" + currentPromptIndex);
    if (currentPromptIndex < allPromptList.length - 1) {
      const newIndex = currentPromptIndex + 1;
      setSelectedPromptID(allPromptList[newIndex]);
    }
  };

  const handlePreviousClick = () => {
    console.log(
      "CurrentPromtIndex from handlePreviousClick:" + currentPromptIndex
    );
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
          preparationTime={taskInfo.preparationTime}
          recordingTime={taskInfo.recordingTime}
          onPrev={handlePreviousClick}
          onNext={handleNextClick} // Pass the onNext handler
          isFirstPrompt={currentPromptIndex === 0}
          isLastPrompt={currentPromptIndex === allPromptList.length - 1}
        />
      )}
      {promptDetails ? (
        <div>
          <PromptDetails promptTitle={promptDetails.prompt} />
          <Task6Options options={promptDetails.options} />
          {/* TODO: Implement timer later */}
          {/* <Timer initialTime={taskInfo.preparationTime} /> */}
          <TwoSampleAnswers
            sample_answer={promptDetails.sample_answer}
            important_keywords={promptDetails.important_keywords}
            sample_answer_option_b={promptDetails.sample_answer_option_b}
            important_keywords_option_b={
              promptDetails.important_keywords_option_b
            }
            text1="Sample Answer for Option A"
            text2="Sample Answer for Option B"
          />
        </div>
      ) : (
        <p>Loading prompt details...</p>
      )}
    </div>
  );
};

export default Task_6_PracticePage;
