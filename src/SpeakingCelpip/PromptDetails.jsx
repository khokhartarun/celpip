import styles from './PromptDetails.module.css';

const PromptDetails = ({ promptTitle, promptText, promptPointers }) => {
  // Use promptText if available, otherwise fall back to promptTitle
  const displayText = promptText || promptTitle;

  return (
    <div>
      <p className={`${styles.promptTitle} ${styles.noSelect}`}>{displayText}</p>
      {/* <div className="note">
        *NOTE: This sample test is not recording your response.
      </div> */}
      {promptPointers && (
        <div className={styles.promptPointers}>
          {Array.isArray(promptPointers) ? (
            promptPointers.map((pointer, index) => (
              <p key={index} className={styles.pointerItem}>• {pointer}</p>
            ))
          ) : (
            <p className={styles.pointerItem}>• {promptPointers}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PromptDetails;
