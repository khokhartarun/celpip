import React, { useState, useEffect } from "react";
import BackLink from "./BackLink";
import PracticePageHeader from "./PracticePageHeader";
import PromptDetails from "./PromptDetails";
import { celpip_speaking_tasks_info } from "../data";
import { Box, Card, CardMedia } from "@mui/material";
import OneSampleAnswer from "./OneSampleAnswer";

const Task_3_4_8_PracticePage = ({
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  const [promptDetails, setPromptDetails] = useState(null);
  const [selectedPromptID, setSelectedPromptID] = useState(selectedPrompt);
  const [taskInfo, setTaskInfo] = useState({});
  const [imageError, setImageError] = useState(null);

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
  }, [selectedTaskType, allPromptList, currentPromptIndex, allPromptsData, selectedPromptID]);

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

  const handleImageError = (error) => {
    console.error('Image loading error:', error);
    setImageError('Failed to load image');
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
          onNext={handleNextClick}
          isFirstPrompt={currentPromptIndex === 0}
          isLastPrompt={currentPromptIndex === allPromptList.length - 1}
        />
      )}
      {promptDetails ? (
        <div>
          <PromptDetails promptTitle={promptDetails.prompt} />

          {/* MUI Image Component */}
          <Box
            sx={{
              marginTop: 2,
              marginBottom: 2,
              display: "flex",
              justifyContent: "center",
              padding: { xs: "0.5rem", sm: "1rem" },
            }}
          >
            <Card
              sx={{
                maxWidth: { xs: "100%", sm: "80%", md: "60%" },
                maxHeight: "50%",
              }}
            >
              {imageError ? (
                <div style={{ padding: '1rem', textAlign: 'center', color: 'red' }}>
                  {imageError}
                </div>
              ) : (
                <CardMedia
                  component="img"
                  image={promptDetails.image_url}
                  alt="Task related image"
                  sx={{ objectFit: "contain", width: "100%", height: "auto" }}
                  onError={handleImageError}
                />
              )}
            </Card>
          </Box>

          {/* Sample Answer Component */}
          <OneSampleAnswer
            sample_answer={promptDetails.sample_answer}
            important_keywords={promptDetails.important_keywords}
            text1="Sample Answer"
          />
        </div>
      ) : (
        <p>Loading prompt details...</p>
      )}
    </div>
  );
};

export default Task_3_4_8_PracticePage;
