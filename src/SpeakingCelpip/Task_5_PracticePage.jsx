import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import PracticePageHeader from "./PracticePageHeader";
import PromptDetails from "./PromptDetails";
import TwoSampleAnswers from "./TwoSampleAnswers"; // Import the TwoSampleAnswers component
import { celpip_speaking_tasks_info } from "../data";

const Task_5_PracticePage = ({
  selectedTaskType,
  allPromptList,
  allPromptsData,
  selectedPrompt,
  onBack,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); // Store the index of the selected image
  const [step, setStep] = useState(1); // Step 1: Choose an option, Step 2: Next view with the selected image
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
    setPromptDetails(promptData);
  }, [selectedTaskType, allPromptList, currentPromptIndex, selectedPromptID, allPromptsData]);

  const handleNextClick = () => {
    console.log(
      "CurrentPromptIndex from handleNextClick:" + currentPromptIndex
    );
    if (currentPromptIndex < allPromptList.length - 1) {
      const newIndex = currentPromptIndex + 1;
      setSelectedPromptID(allPromptList[newIndex]);
      setSelectedImageIndex(null); // Reset the selected image index
      setStep(1); // Go back to Step 1 for the next prompt
    }
  };

  const handlePreviousClick = () => {
    console.log(
      "CurrentPromptIndex from handlePreviousClick:" + currentPromptIndex
    );
    if (currentPromptIndex > 0) {
      const newIndex = currentPromptIndex - 1;
      setSelectedPromptID(allPromptList[newIndex]);
      setSelectedImageIndex(null); // Reset the selected image index
      setStep(1); // Go back to Step 1 for the previous prompt
    }
  };

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index); // Set the index of the selected image
  };

  const handleNext = () => {
    setStep(step + 1); // Move to next step
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
          onNext={handleNextClick} // Moves to the next prompt
          isFirstPrompt={currentPromptIndex === 0}
          isLastPrompt={currentPromptIndex === allPromptList.length - 1}
        />
      )}
      {promptDetails ? (
        <div>
          <PromptDetails promptTitle={promptDetails.prompt} />
          {step === 1 &&
            selectedImageIndex === null && ( // Show label if no image is selected in step 1
              <Typography variant="subtitle1" align="center" sx={{ mb: 2 }}>
                *Please select one option to proceed further:
              </Typography>
            )}

          {/* Label 2: Show when an image is selected in step 1 */}
          {step === 1 && selectedImageIndex !== null && (
            <Typography variant="subtitle1" align="center" sx={{ mb: 2 }}>
              {"Please click on \"Next Option\" Button given below:"}
            </Typography>
          )}
          <Box
            p={2} // For larger screens
            sx={{
              padding: { xs: "0rem", sm: "1rem", md: "2rem" }, // Responsive padding (less on mobile)
              margin: { xs: "0", sm: "auto" }, // Adjust margins for mobile
            }}
          >
            {step === 1 && (
              <Grid
                Grid
                container
                spacing={{ xs: 1, sm: 3 }}
                justifyContent="center"
              >
                {promptDetails.choices.options
                  .slice(0, 2)
                  .map((option, index) => (
                    <Grid item xs={6} key={index}>
                      <Card
                        onClick={() => handleImageSelect(index)} // Store the index of the selected image
                        style={{
                          border:
                            selectedImageIndex === index
                              ? "3px solid blue"
                              : "1px solid gray",
                          cursor: "pointer",
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="240"
                          sx={{ objectFit: "contain" }}
                          image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${option.image_name}`}
                          alt={`option ${index + 1}`}
                        />
                        <CardContent>
                          <Typography variant="h6" className="no-select">
                            {option.title}
                          </Typography>
                          <ul className="custom-list">
                            {option.options.map((point, i) => (
                              <li key={i}>
                                <Typography
                                  className="no-select"
                                  variant="body2"
                                >
                                  {point}
                                </Typography>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            )}
            {step === 2 && selectedImageIndex !== null && (
              <Grid container spacing={2}>
                {/* First Card: Selected Image (Your Choice) */}
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="h6" align="center" sx={{ mb: 1 }}>
                      Your Choice
                    </Typography>
                    <Card>
                      <CardMedia
                        component="img"
                        height="240"
                        image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${promptDetails.choices.options[selectedImageIndex].image_name}`}
                        alt="selected option"
                        sx={{ objectFit: "contain" }}
                      />
                      <CardContent>
                        <Typography variant="h6" className="no-select">
                          {
                            promptDetails.choices.options[selectedImageIndex]
                              .title
                          }
                        </Typography>{" "}
                        {/* Fetch the title */}
                        <ul className="custom-list">
                          {promptDetails.choices.options[
                            selectedImageIndex
                          ].options.map((point, i) => (
                            <li key={i}>
                              <Typography variant="body2" className="no-select">
                                {point}
                              </Typography>{" "}
                              {/* Fetch the options */}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>

                {/* Second Card: Third Option (Other's Choice) */}
                <Grid item xs={6}>
                  <Box>
                    <Typography variant="h6" align="center" sx={{ mb: 1 }}>
                     {" Other's Choice"}
                    </Typography>
                    <Card>
                      <CardMedia
                        component="img"
                        height="240"
                        sx={{ objectFit: "contain" }}
                        image={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}${promptDetails.choices.options[2].image_name}`}
                        alt="new option"
                      />
                      <CardContent>
                        <Typography variant="h6">
                          {promptDetails.choices.options[2].title}
                        </Typography>
                        <ul className="custom-list">
                          {promptDetails.choices.options[2].options.map(
                            (point, i) => (
                              <li key={i}>
                                <Typography variant="body2">{point}</Typography>
                              </li>
                            )
                          )}
                        </ul>
                      </CardContent>
                    </Card>
                  </Box>
                </Grid>
              </Grid>
            )}

            {step === 2 && promptDetails && (
              <Box mt={4}>
                <TwoSampleAnswers
                  sample_answer={promptDetails.choices.options[0].sample_answer} // Sample answer for Option A
                  important_keywords={
                    promptDetails.choices.options[0].important_keywords
                  } // Important keywords for Option A
                  sample_answer_option_b={
                    promptDetails.choices.options[1].sample_answer
                  } // Sample answer for Option B
                  important_keywords_option_b={
                    promptDetails.choices.options[1].important_keywords
                  } // Important keywords for Option B
                  text1="Sample Answer for Choice A"
                  text2="Sample Answer for Choice B"
                />
              </Box>
            )}

            <Box mt={2} sx={{ textAlign: "right" }}>
              {selectedImageIndex !== null &&
                step === 1 && ( // Only show the Next button on step 1
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      backgroundColor: "#301a52",
                      "&:hover": { backgroundColor: "#251440" },
                    }}
                  >
                    Next Option
                  </Button>
                )}
            </Box>
          </Box>
        </div>
      ) : (
        <p>Loading prompt details...</p>
      )}
    </div>
  );
};

export default Task_5_PracticePage;
