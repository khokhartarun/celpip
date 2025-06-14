import { useRouter } from "next/router";
import Sidebar from "../../../Common/Sidebar";
import CentralControl from "../../../SpeakingCelpip/CentralControl";
import axios from "axios";

// Configure axios defaults
axios.defaults.timeout = 10000; // 10 seconds timeout
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Add retry logic
const fetchWithRetry = async (url, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await axios.get(url, {
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache'
        }
      });
      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      // Wait for 1 second before retrying
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
};

export async function getStaticPaths() {
  const taskTypes = ["Task1", "Task2", "Task3", "Task4", "Task5", "Task6", "Task7", "Task8"];
  const paths = [];

  for (const taskType of taskTypes) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://a4jq1r9ne2.execute-api.us-east-1.amazonaws.com/dev";
      const url = `${baseUrl}/Speaking/${taskType}`;
      console.log(`Fetching data from URL: ${url}`);
      
      const response = await fetchWithRetry(url);
      
      if (response.data && Array.isArray(response.data)) {
        const prompts = response.data.map(item => item.PromptID);
        console.log(`${taskType} Prompt Ids:`, prompts);

        prompts.forEach(promptId => {
          paths.push({
            params: {
              taskType,
              promptId
            }
          });
        });
      } else {
        console.error(`Invalid data format for ${taskType}`);
        // Add a default path
        paths.push({
          params: {
            taskType,
            promptId: 'P1'
          }
        });
      }
    } catch (error) {
      console.error(`Error fetching prompts for ${taskType}:`, error.message);
      // Add a default path
      paths.push({
        params: {
          taskType,
          promptId: 'P1'
        }
      });
    }
  }

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const { taskType, promptId } = params;
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "https://a4jq1r9ne2.execute-api.us-east-1.amazonaws.com/dev";

  try {
    console.log(`Fetching data for ${taskType} prompt ${promptId}`);
    const url = `${baseUrl}/Speaking/${taskType}`;
    
    const response = await fetchWithRetry(url);

    if (!response.data || !Array.isArray(response.data)) {
      console.error(`Invalid data format for ${taskType}`);
      return {
        props: {
          taskType,
          promptId,
          allPromptsData: [],
          prompts: [],
          error: 'Invalid data format'
        }
      };
    }

    const data = response.data;
    return {
      props: {
        taskType,
        promptId,
        allPromptsData: data,
        prompts: data.map((item) => item.PromptID),
        error: null
      }
    };
  } catch (error) {
    console.error("Error fetching task data:", error.message);
    return {
      props: {
        taskType,
        promptId,
        allPromptsData: [],
        prompts: [],
        error: `Failed to fetch data: ${error.message}. Please try again later.`
      }
    };
  }
}

const SpeakingPrompt = ({ taskType, promptId, allPromptsData, prompts, error }) => {
  const router = useRouter();

  // Show loading state while the page is being generated
  if (router.isFallback) {
    return (
      <div className="speaking">
        <Sidebar className="sidebar" />
        <div className="central-control">
          <p>Loading speaking data...</p>
        </div>
      </div>
    );
  }

  const handleBackToTasks = () => {
    if (router.asPath !== '/speaking') {
      router.push("/speaking");
    }
  };

  const handleTaskSelect = (taskType) => {
    if (router.asPath !== `/speaking/${taskType}`) {
      router.push(`/speaking/${taskType}`);
    }
  };

  if (error) {
    return (
      <div className="speaking">
        <Sidebar className="sidebar" />
        <div className="central-control">
          <p>Error: {error}</p>
          <button onClick={handleBackToTasks}>Back to Tasks</button>
        </div>
      </div>
    );
  }

  if (!allPromptsData || allPromptsData.length === 0) {
    return (
      <div className="speaking">
        <Sidebar className="sidebar" />
        <div className="central-control">
          <p>No speaking data available</p>
          <button onClick={handleBackToTasks}>Back to Tasks</button>
        </div>
      </div>
    );
  }

  return (
    <div className="speaking">
      <Sidebar className="sidebar" />
      <div className="central-control">
        <CentralControl
          selectedModule="speaking"
          moduleDesc="The CELPIP Speaking Test is designed to assess your ability to speak clearly and coherently in a variety of everyday situations. It consists of eight different tasks, each testing different aspects of your speaking ability. The entire Speaking test takes about 15–20 minutes. Below is a detailed breakdown of the task types:"
          selectedTask={taskType}
          prompts={prompts}
          allPromptsData={allPromptsData}
          onBack={handleBackToTasks}
          onTaskSelect={handleTaskSelect}
          selectedPrompt={promptId}
        />
      </div>
    </div>
  );
};

export default SpeakingPrompt; 