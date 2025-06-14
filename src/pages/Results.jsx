import React, { useEffect, useState } from "react";
import CircleOfAchievement from "../Components/CircleOfAchievement";
import CapturedResponse from "../Components/CapturedResponse";
import { data } from "../data"; // Assuming data is static and can be imported

const Results = () => {
  // State to handle client-side rendering when `userId` is available
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Only execute in the browser (since `userId` is expected to come from the query params)
    if (typeof window !== "undefined") {
      const id = new URLSearchParams(window.location.search).get("userId");
      setUserId(id);
    }
  }, []); // Empty dependency array ensures it runs once when the component is mounted

  // Handle if userId is missing or not available
  if (!userId) {
    return <div>Loading user data...</div>;
  }

  return (
    <React.Fragment>
      <CapturedResponse userId={userId} />
      <CircleOfAchievement data={data} />
    </React.Fragment>
  );
};

export default Results;
