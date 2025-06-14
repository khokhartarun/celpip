import React, { useState, useEffect } from "react";
import ResultDetails from "./ResultDetails";
import { useUser } from "../context/UserProvider";
const CapturedResponse = () => {
  const [capturedResponses, setCapturedResponses] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { userId } = useUser();
  useEffect(() => {
    // Replace with your API endpoint

    const apiUrl = `${process.env.REACT_APP_API_URL}/getPracticeTests?userId=${userId}`;

    fetch(apiUrl)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setCapturedResponses(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [userId]); // Empty dependency array means this effect runs once on mount

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="prompts-list">
      {capturedResponses.map((response) => {
        return (
          <ResultDetails
            key={response.PracticeTestId}
            {...response}
          ></ResultDetails>
        );
      })}
    </section>
  );
};

export default CapturedResponse;
