import React, { useState, useEffect } from "react";
import CaptureAudio from "./CaptureAudio.js";
import { useRouter } from "next/router"; // Use Next.js's useRouter hook

export const PracticeTest = ({ userId }) => {
  const router = useRouter();
  const { id: testId } = router.query; // Access the 'id' parameter from the query string
  const [speakingTest, setSpeakingTest] = useState({});
  const [practiceTestId, setPracticeTestId] = useState("");
  const [practiceTestTitle, setPracticeTestTitle] = useState("");
  const [practiceTestCategory, setPracticeTestCategory] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const prompts = speakingTest.prompts || [];

  const handleNextPrompt = () => {
    setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
  };

  const currentPrompt = prompts[currentPromptIndex] || {};

  useEffect(() => {
    console.log("useEffect triggered");
    console.log("Current testId:", testId);
    console.log("Current userId:", userId);

    if (!userId) {
      console.error("userId is not available");
      setIsLoading(false);
      return;
    }

    if (!testId) {
      console.error("testId is not available");
      setIsLoading(false);
      return;
    }

    // Construct API URL dynamically using the 'id' parameter
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/getPromptDetails?id=${testId}&userId=${userId}`;
    console.log(apiUrl);

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        const promptDetails = JSON.parse(data.promptDetails);
        setPracticeTestId(data.ptId);
        setPracticeTestTitle(promptDetails.title);
        setPracticeTestCategory(promptDetails.category);
        setSpeakingTest(JSON.parse(data.promptDetails));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [testId, userId]); // Add 'testId' as a dependency to the effect

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="test">
      <p>
        Test #: {practiceTestTitle} - {practiceTestCategory}
      </p>
      <button onClick={handleNextPrompt} className="btn hero-btn">
        Next Prompt
      </button>
      <CaptureAudio
        ptId={practiceTestId}
        pgId={testId}
        {...currentPrompt}
      />
    </section>
  );
};

export default PracticeTest;
