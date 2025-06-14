import React from "react";

export const PromptsTitle = ({ onClick, prompt }) => {
  return (
    <div onClick={onClick} className="prompts-list-item">
      {prompt.title}
    </div>
  );
};
export default PromptsTitle;
