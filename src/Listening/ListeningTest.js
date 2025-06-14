import React, { useState } from "react";

const ListeningTest = () => {
  const [answers, setAnswers] = useState({});

  const handleChange = (e, key) => {
    setAnswers({ ...answers, [key]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Submitted Answers:", answers);
    // Here, you can also send the answers to a server or handle them as needed
  };
  // Define a structure for a complex paragraph with multiple inputs
  const paragraphParts = [
    {
      type: "text",
      content:
        "It was a bright cold day in April, and the clocks were striking ",
    },
    { type: "input", key: "Answer1" },
    { type: "text", content: ". Winston Smith, his chin nuzzled into his " },
    { type: "input", key: "Answer2" },
    {
      type: "text",
      content:
        " in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.",
    },
    // Continue adding parts as needed
  ];

  return (
    <form onSubmit={handleSubmit}>
      {paragraphParts.map((part, index) => {
        switch (part.type) {
          case "text":
            return <span key={index}>{part.content}</span>;
          case "input":
            return (
              <input
                key={index}
                type="text"
                value={answers[part.key] || ""}
                onChange={(e) => handleChange(e, part.key)}
                placeholder="Type here"
                style={{ width: "auto" }}
              />
            );
          default:
            return null;
        }
      })}
      <button type="submit">Submit Answers</button>
    </form>
  );
};

export default ListeningTest;
