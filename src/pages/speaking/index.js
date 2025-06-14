// pages/speaking/[taskType].js
import { useRouter } from "next/router";
import Sidebar from "../../Common/Sidebar";
import TaskList from "../../SpeakingCelpip/TaskList";

const Speaking = () => {
  const router = useRouter();
  const selectedModule = "speaking"; // Assuming this is the module you're working with

  const handleBackToTasks = () => {
    // Check if you're already on the /speaking page
    if (router.asPath !== '/speaking') {
      router.push("/speaking"); // Navigate only if the current path is different
    }
  };

  const handleTaskSelect = (taskType) => {
    // Check if the selected taskType is already in the URL
    if (router.asPath !== `/speaking/${taskType}`) {
      router.push(`/speaking/${taskType}`); // Navigate only if the current path is different
    }
  };

  return (
    <div className="speaking">
      <Sidebar className="sidebar" />
      <div className="central-control">
      <h3>{selectedModule} Module</h3>
      <p style={{ color: "black" }}>The CELPIP Speaking Test is designed to assess your ability to speak clearly and coherently in a variety of everyday situations. It consists of eight different tasks, each testing different aspects of your speaking ability. The entire Speaking test takes about 15–20 minutes. Below is a detailed breakdown of the task types:</p>
      <TaskList selectedModule={selectedModule} onSelectTask={handleTaskSelect} />
    </div>
       
      </div>
  );
};

export default Speaking;
