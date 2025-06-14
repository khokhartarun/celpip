const PromptListItem = ({ promptKey, displayText, onClick }) => {
  return (
    <div className="prompt-item" onClick={() => onClick(promptKey)}>
      {displayText}
    </div>
  );
};

export default PromptListItem;
