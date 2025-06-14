import React, { useState, useEffect } from "react";
import AudioPlayer from "./AudioPlayer";
const ResultDetails = ({
  PracticeTestId,
  PracticeTestTitle,
  PracticeTestCategory,
}) => {
  const [result, setResult] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const apiUrl = `${process.env.REACT_APP_API_URL}/getResponses?ptId=${PracticeTestId}`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setResult(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [PracticeTestId]); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <p>
        {PracticeTestTitle}:{PracticeTestCategory}
      </p>
      {result.map((r) => {
        return <AudioPlayer key={r.RowKey} {...r}></AudioPlayer>;
      })}
    </div>
  );
};
export default ResultDetails;
