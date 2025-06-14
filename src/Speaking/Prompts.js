import React, { useState } from "react";
import { PromptDetails } from "./PromptDetails";
import { PromptsList } from "./PromptsList";
export const Prompts = () => {
  const [selectedPrompt, setSelectedPrompt] = useState(null);

  const handlePromptSelection = (prompt) => {
    setSelectedPrompt(prompt);
  };

  return (
    <div className="samples-container">
      <div>
        {/* Left component content */}
        <PromptsList onPromptSelected={handlePromptSelection}></PromptsList>
      </div>
      <div>
        {/* Right component content */}
        <PromptDetails {...selectedPrompt}></PromptDetails>
      </div>
    </div>
  );
};
export default Prompts;
