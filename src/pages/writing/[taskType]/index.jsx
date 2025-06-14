// pages/speaking/[taskType].js
import { useRouter } from "next/router";
import Sidebar from "../../../Common/Sidebar";
import CentralControl from "../../../SpeakingCelpip/CentralControl";
import axios from "axios";


// This function will fetch data for the dynamic taskType route.
export async function getStaticPaths() {
  const taskTypes = ["Task1", "Task2"];
  const paths = taskTypes.map((taskType) => ({
    params: { taskType }, // Defines possible routes: /Task1, /Task2, /Task3
  }));

  return { paths, fallback: false };
}

// Fetch task data for the given taskType dynamically
export async function getStaticProps({ params }) {
  const { taskType } = params;
  console.log("Task Type:", taskType); // Log the taskType for debugging
  const baseUrl = process.env.REACT_APP_BASE_URL;

  try {
    const url = `${baseUrl}/Writing/${taskType}`;
    console.log("Fetching data from URL:", url); // Log the URL for debugging
    const data = await axios.get(url).then((res) => res.data);
    return {
      props: {
        taskType,
        allPromptsData: data,
        prompts: data.map((item) => item.PromptID), // Assuming the data has a 'PromptID' field
      }
    };
  } catch (error) {
    console.error("Error fetching task data:", error);
    return {
      notFound: true, // Return a 404 if taskType data isn't found
    };
  }
}

const WritingTask = ({ taskType, allPromptsData, prompts }) => {
  const router = useRouter();
  console.log("Writing Prompt Ids:", prompts); // Log the taskType for debugging
  const handleBackToTasks = () => {
    // Check if you're already on the /speaking page
    if (router.asPath !== '/writing') {
      router.push("/writing"); // Navigate only if the current path is different
    }
  };

  const handleTaskSelect = (taskType) => {
    console.log("Task page handleTaskSelect Task Type:", taskType); // Log the selected task type for debugging
    // Check if the selected taskType is already in the URL
    if (router.asPath !== `/writing/${taskType}`) {
      router.push(`/writing/${taskType}`); // Navigate only if the current path is different
    }
  };

  return (
    <div className="speaking">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <CentralControl
          selectedModule="writing"
          moduleDesc="The CELPIP Speaking Test is designed to assess your ability to speak clearly and coherently in a variety of everyday situations. It consists of eight different tasks, each testing different aspects of your speaking ability. The entire Speaking test takes about 15–20 minutes. Below is a detailed breakdown of the task types:"
          selectedTask={taskType}
          prompts={prompts}
          allPromptsData={allPromptsData}
          onBack={handleBackToTasks}
          onTaskSelect={handleTaskSelect}
        />
      </div>
    </div>
  );
};

export default WritingTask;
