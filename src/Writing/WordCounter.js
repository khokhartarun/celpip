import React, { useState, useEffect, useCallback, useMemo } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const keywords = useMemo(
    () => ["highlight", "bold", "certain", "keywords"],
    []
  );

  const highlightKeywords = useCallback(
    (text) => {
      const parts = text.split(new RegExp(`(${keywords.join("|")})`, "gi"));
      return parts.map((part, i) =>
        keywords.includes(part.toLowerCase()) ? (
          <strong
            style={{ backgroundColor: "yellow", fontWeight: "bold" }}
            key={i}
          >
            {part}
          </strong>
        ) : (
          part
        )
      );
    },
    [keywords]
  );

  const countWords = useCallback((text) => {
    return text.split(/\s+/).filter((word) => word.length > 0).length;
  }, []);

  useEffect(() => {
    setWordCount(countWords(text));
  }, [text, countWords]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="writing-test-area">
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="Type your response here..."
        rows="25"
        cols="100"
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontSize: "22px", // Set font size
          fontFamily: "Arial", // Set font family
        }}
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
      />
      <div>Word Count: {wordCount}</div>
      <div>{highlightKeywords(text)}</div>
    </div>
  );
};

export default WordCounter;
