import React, { useState, useRef } from "react";
import Prompt from "../Speaking/Prompt.js";

function CaptureAudio({ pgId, ptId, id, prompt }) {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const audioChunksRef = useRef([]);

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      audioChunksRef.current.push(data);
    }
  };

  const startRecording = async () => {
    // Discard the blob and clean all references
    URL.revokeObjectURL(audioUrl);
    setAudioBlob(null);
    setAudioUrl(null);
    if (!navigator.mediaDevices) {
      console.error("Media Devices API not supported");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream, { mimeType: "audio/webm" });
      recorder.ondataavailable = handleDataAvailable;
      recorder.onstop = async () => {
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setAudioBlob(blob); // Save the blob for later use
        audioChunksRef.current = [];
      };
      recorder.start();
      setMediaRecorder(recorder);
      setRecording(true);
    } catch (error) {
      console.error("Could not get user media", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const generateUniqueFilename = () => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, "");
    return `recording_${timestamp}.webm`;
  };

  const uploadAudio = async () => {
    if (!audioBlob) {
      console.error("No audio to upload");
      return;
    }

    const formData = new FormData();
    formData.append("file", audioBlob, generateUniqueFilename()); // Adjust the field name and filename as per your server requirements
    formData.append("promptId", id);
    formData.append("pgId", pgId);
    formData.append("ptId", ptId);
    formData.append("prompt", prompt);

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/upload-audio`,
        {
          // Replace with your server's URL
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Upload successful");
        // Handle response here
        // Discard the blob and clean all references
        URL.revokeObjectURL(audioUrl);
        setAudioBlob(null);
        setAudioUrl(null);
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <div className="container">
      <h2>
        <Prompt prompt={prompt} />
      </h2>
      <div className={`mic-icon ${recording ? "recording" : ""}`}>
        {/* SVG for microphone icon */}
        <svg viewBox="0 0 24 24" className="mic-icon-svg">
          <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 2.99 3zM19 11v2c0 3.31-2.69 6-6 6s-6-2.69-6-6v-2h2v2c0 2.21 1.79 4 4 4s4-1.79 4-4v-2h2zm-7 9c2.76 0 5-2.24 5-5h2c0 3.86-3.14 7-7 7s-7-3.14-7-7h2c0 2.76 2.24 5 5 5z" />
        </svg>
      </div>
      <div className="start-stop">
        <button
          onClick={startRecording}
          disabled={recording}
          type="button"
          className="btn hero-btn"
        >
          Start
        </button>
        <button
          onClick={stopRecording}
          disabled={!recording}
          type="button"
          className="btn hero-btn"
        >
          Stop
        </button>
      </div>
      <h2>Click Start button to capture your response for Prompt # {id}:</h2>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl}>
            Your browser does not support the audio element.
          </audio>
          <a href={audioUrl} download="recording.webm">
            Download Recording
          </a>
          <p>Click play to verify the recording.</p>
          <button onClick={uploadAudio} type="button" className="btn hero-btn">
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default CaptureAudio;
