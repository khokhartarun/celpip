import React, { useEffect, useState } from "react";
import { celpip_speaking_tasks_info } from "../data";
import Task_3_4_8_PracticePage from "./Task_3_4_8_PracticePage";
import WritingPracticePage_Base from "../WritingCelpip/WritingPracticePage_Base";
import Task_1_2_7_PracticePage from "./Task_1_2_7_PracticePage";
import Task_6_PracticePage from "./Task_6_PracticePage";
import Task_5_PracticePage from "./Task_5_PracticePage";
import BackLink from "./BackLink";

const PracticePage_Base = ({
  selectedModule,
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  // Format the task type to match the data structure
  const formattedTaskType = selectedTaskType?.replace(/\s+/g, '');

  return (
    <React.Fragment>
      <BackLink onBack={onBack} title="Back to Samples" />
      {selectedModule === "writing" ? (
        <WritingPracticePage_Base
          selectedTaskType={formattedTaskType}
          allPromptList={allPromptList}
          allPromptsData={allPromptsData}
          selectedPrompt={selectedPrompt}
          onBack={onBack}
        />
      ) : formattedTaskType === "Task6" ? (
        <Task_6_PracticePage
          selectedTaskType={formattedTaskType}
          allPromptList={allPromptList}
          allPromptsData={allPromptsData}
          selectedPrompt={selectedPrompt}
          onBack={onBack}
        />
      ) : formattedTaskType === "Task5" ? (
        <Task_5_PracticePage
          selectedTaskType={formattedTaskType}
          allPromptList={allPromptList}
          allPromptsData={allPromptsData}
          selectedPrompt={selectedPrompt}
          onBack={onBack}
        />
      ) : ["Task3", "Task4", "Task8"].includes(formattedTaskType) ? (
        <Task_3_4_8_PracticePage
          selectedTaskType={formattedTaskType}
          allPromptList={allPromptList}
          allPromptsData={allPromptsData}
          selectedPrompt={selectedPrompt}
          onBack={onBack}
        />
      ) : ["Task1", "Task2", "Task7"].includes(formattedTaskType) ? (
        <Task_1_2_7_PracticePage
          selectedTaskType={formattedTaskType}
          allPromptList={allPromptList}
          allPromptsData={allPromptsData}
          selectedPrompt={selectedPrompt}
          onBack={onBack}
        />
      ) : (
        <p>No task selected or task type not recognized.</p>
      )}
    </React.Fragment>
  );
};

export default PracticePage_Base;
