import React, { useState, useEffect } from "react";
import { PromptsTitle } from "./PromptsTitle";
export const PromptsList = ({ onPromptSelected }) => {
  const [speakingTestPrompts, setSpeakingTestPrompts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = `${process.env.REACT_APP_API_URL}/getPrompts`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setSpeakingTestPrompts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="prompts-list">
      {speakingTestPrompts.map((speakingTestPrompt) => {
        return (
          <PromptsTitle
            key={speakingTestPrompt.id}
            onClick={() => onPromptSelected(speakingTestPrompt)}
            prompt={speakingTestPrompt}
          />
        );
      })}
    </section>
  );
};
export default PromptsList;
