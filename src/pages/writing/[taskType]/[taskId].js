import React from "react";
import Task_3_4_8_PracticePage from "../../../SpeakingCelpip/Task_3_4_8_PracticePage";
import WritingPracticePage_Base from "../../../WritingCelpip/WritingPracticePage_Base";
import Task_1_2_7_PracticePage from "../../../SpeakingCelpip/Task_1_2_7_PracticePage";
import Task_6_PracticePage from "../../../SpeakingCelpip/Task_6_PracticePage";
import Task_5_PracticePage from "../../../SpeakingCelpip/Task_5_PracticePage";
import W_Task1_PracticePage from "../../../WritingCelpip/W_Task1_PracticePage"; // Import Task1 component
import BackLink from "../../../SpeakingCelpip/BackLink";

// pages/writing/[taskType]/[taskId].js
export async function getStaticPaths() {
  // Define all possible [taskType]/[taskId] combinations
  const taskTypes = ["Task1", "Task2"];
  const taskIds = [
  'P1',  'P10', 'P11', 'P12',
  'P13', 'P14', 'P15', 'P16',
  'P17', 'P18', 'P19', 'P2',
  'P20', 'P3',  'P4',  'P5',
  'P6',  'P7',  'P8',  'P9'
]

  const paths = taskTypes.flatMap((taskType) =>
    taskIds.map((taskId) => ({
      params: { taskType, taskId },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { taskType, taskId } = params;
  const data = {"important_keywords": "Complaint, Disappointing stay, Noisy room, Uncomfortable bed, Restless night, Unclean bathroom, Grimy tiles, Unpleasant odor, Lack of cleanliness, Unresponsive staff, Indifferent, Lack of professionalism, Dissatisfaction, Partial refund, Complimentary stay, Address concerns, Future guests", "PromptID": "P1", "category": "Complaint", "sample_answer": "Dear Hotel Manager,\n\nI am writing to express my dissatisfaction with my recent stay at your hotel during a weekend getaway. The room I was assigned was exceedingly noisy due to constant disturbances from the adjacent rooms, which made it challenging to relax. Additionally, the bed was hard and uncomfortable, leading to a restless night and a sore back the next day.\n\nMoreover, I was disappointed to find that the bathroom was not properly cleaned. The tiles were grimy, and there was a lingering unpleasant odor, which greatly affected the overall experience. This level of cleanliness is unacceptable for a hotel of your reputation.\n\nTo make matters worse, when I approached the staff for assistance regarding these issues, they were unresponsive and seemed indifferent to my concerns. Their lack of professionalism was quite frustrating and added to my overall dissatisfaction.\n\nI would appreciate it if you could address these concerns by offering a partial refund or a complimentary stay in the future. Ensuring that these issues are resolved for future guests would also be appreciated.\n\nThank you for your attention to this matter.\n\nSincerely,\n[Your Name]", "prompt_text": "You recently stayed at a hotel for a weekend getaway. However, the room was noisy, the bed was uncomfortable, and the bathroom was not clean. Additionally, the hotel staff were unhelpful. Write an email to the hotel manager.", "prompt_pointers": ["Describe the issues with the room", "Explain the problems with the cleanliness", "Mention the unhelpful behavior of the staff", "State how you would like the hotel to resolve these issues"], "prompt_title": "Unsatisfactory Hotel Stay", "Module_TaskType": "Writing_Task1", "type": "Formal"}

  return { props: { taskType, taskId, data } };
}

const PracticePage_Base = ({
  taskType,
  taskId,
  data
}) => {
  return (
    <div>
      <W_Task1_PracticePage promptDetails={data} />
      <h1>Task Type: {taskType}</h1>
      <h2>Task ID: {taskId}</h2>
    </div>
  );
};

export default PracticePage_Base;
