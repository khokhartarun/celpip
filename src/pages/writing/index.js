// pages/speaking/[taskType].js
import { useRouter } from "next/router";
import Sidebar from "../../Common/Sidebar";
import TaskList from "../../SpeakingCelpip/TaskList";

const Writing = () => {
  const router = useRouter();
  const selectedModule = "writing"; // Assuming this is the module you're working with

  const handleBackToTasks = () => {
    // Check if you're already on the /speaking page
    if (router.asPath !== '/writing') {
      router.push("/writing"); // Navigate only if the current path is different
    }
  };

  const handleTaskSelect = (taskType) => {
    // Check if the selected taskType is already in the URL
    console.log("Index page handleTaskSelect Task Type:", taskType); // Log the selected task type for debugging
    if (router.asPath !== `/writing/${taskType}`) {
      router.push(`/writing/${taskType}`); // Navigate only if the current path is different
    }
  };

  return (
    <div className="writing">
      <Sidebar className="sidebar" />
      <div className="central-control">
      <h3>{selectedModule} Module</h3>
      <p style={{ color: "black" }}>The CELPIP Writing Test assesses your ability to communicate effectively in written English. It consists of two tasks designed to evaluate your writing skills in different contexts. You have a total of 53–60 minutes to complete both tasks. Below is a detailed breakdown of each task:</p>
      <TaskList selectedModule={selectedModule} onSelectTask={handleTaskSelect} />
    </div>
       
      </div>
  );
};

export default Writing;
