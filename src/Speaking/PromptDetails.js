import React from "react";

export const PromptDetails = ({ id, title, category, prompts }) => {
  // Static part of the URL
  const staticUrl = "/test";
  const promptsArray = prompts || [];
  // Concatenate the static URL with the dynamic query parameter
  const testPageUrl = id
    ? `${staticUrl}?id=${encodeURIComponent(id)}`
    : staticUrl;

  return (
    <div className="samples-prompt-details">
      <h2>{title}</h2>
      <h3>{category}</h3>
      <div>
        {promptsArray.map((obj) => (
          <div key={obj.id}>
            <p>
              {obj.id}: {obj.prompt}
            </p>
          </div>
        ))}
      </div>
      <a href={testPageUrl} className="btn hero-btn ">
        Start Practice Tests
      </a>
    </div>
  );
};
export default PromptDetails;
