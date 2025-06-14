import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SampleAnswer = ({ sample_answer, important_keywords, PromptID }) => {
  const [sampleAnswer, setSampleAnswer] = useState();
  const [importantKeywords, setImportantKeywords] = useState();

  useEffect(() => {
    // Clear the previous sample answer and important keywords when promptId changes
    setSampleAnswer(null);
    setImportantKeywords(null);
  }, [PromptID]);

  const handleViewSampleAnswerClick = () => {
    if (sample_answer || important_keywords) {
      setSampleAnswer(sample_answer);
      setImportantKeywords(important_keywords);
    }
  };
  // const handleViewSampleAnswerClick = () => {
  //   const sanitizedTaskType = taskType.replace(' ', '');
  //   console.log("Sample answer loading..")
  //   // Call the REST API to get the sample answer and important keywords
  //   axios.get(`${process.env.REACT_APP_BASE_URL}/speaking/${sanitizedTaskType}/${promptId}/sample_answer`)
  //     .then(response => {
  //       setSampleAnswer(response.data.sample_answer);
  //       setImportantKeywords(response.data.important_keywords);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching sample answer:", error);
  //     });
  // };

  return (
    <div>
      <button className="view-sample-answer" onClick={handleViewSampleAnswerClick}>
        View Sample Answer
      </button>

      {/* Display important keywords if available */}
      {importantKeywords && (
        <div className="important-keywords">
          <label>Important Keywords:</label>
          <p>{importantKeywords}</p>
        </div>
      )}

      {/* Display sample answer if available */}
      {sampleAnswer && (
        <div className="sample-answer">
          <label>Sample Answer:</label>
          <p>{sampleAnswer}</p>
        </div>
      )}
    </div>
  );
};

export default SampleAnswer;
