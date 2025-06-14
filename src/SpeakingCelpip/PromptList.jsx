import React from 'react';
import PromptListItem from './PromptListItem';

const PromptList = ({ prompts, onPromptSelect, selectedModule, selectedTask }) => {
  return (
    <div className="prompt-list">
      {prompts.map((prompt, index) => (
        <PromptListItem
          key={index}
          promptKey={prompt} // This is the actual key like P1, P2
          displayText={`${selectedModule.charAt(0).toUpperCase() + selectedModule.slice(1)} ${selectedTask} Sample #${index + 1}`} // This is the display text
          onClick={onPromptSelect}
        />
      ))}
    </div>
  );
};

export default PromptList;