import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleOfAchievement = ({ data }) => {
  const scores = [
    { label: "Pronunciation", value: data.PronunciationScore },
    { label: "Accuracy", value: data.AccuracyScore },
    { label: "Prosody", value: data.ProsodyScore },
    { label: "Completeness", value: data.CompletenessScore },
    { label: "Fluency", value: data.FluencyScore },
    { label: "Topic", value: data.TopicScore },
    { label: "Grammar", value: data.GrammarScore },
    { label: "Vocabulary", value: data.VocabularyScore },
  ];

  return (
    <section className="results">
      {scores.map((score, index) => (
        <div key={index} style={{ margin: "10px", width: "150px" }}>
          <CircularProgressbar
            value={score.value}
            text={`${score.value}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${score.value / 100})`,
              textColor: "#f88",
              trailColor: "#d6d6d6",
              backgroundColor: "#3e98c7",
            })}
          />
          <div style={{ textAlign: "center", marginTop: "5px" }}>
            {score.label}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CircleOfAchievement;
