import React, { useState, useEffect } from "react";

const AudioPlayer = ({ ResponseAudioFileName, Prompt, RowKey }) => {
  const [audioSrc, setAudioSrc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchUrl = `${process.env.REACT_APP_API_URL}/getAudio?af=${ResponseAudioFileName}`;

    fetch(fetchUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.blob();
      })
      .then((blob) => {
        const url = URL.createObjectURL(
          new Blob([blob], { type: "audio/webm" })
        ); // Adjust MIME type if necessary
        console.log("Blob URL:", url);
        setAudioSrc(url);
        setLoading(false);

        // Cleanup function to revoke the object URL
        return () => {
          URL.revokeObjectURL(url);
        };
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });

    // Cleanup function to revoke URL on component unmount
    return () => {
      if (audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc, ResponseAudioFileName]);

  if (loading) {
    return <div>Loading audio...</div>;
  }

  if (error) {
    return <div>Error loading audio: {error}</div>;
  }

  return (
    <div>
      <p>
        Prompt {RowKey}: {Prompt}
      </p>
      <div>
        {audioSrc && (
          <audio controls src={audioSrc} preload="auto">
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default AudioPlayer;
