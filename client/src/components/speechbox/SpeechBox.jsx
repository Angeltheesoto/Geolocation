import React from "react";
import "./speechbox.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechBox = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // console.log(transcript);

  return (
    <div className="speechbox-container">
      <h1>
        speech<span>GPT</span>
      </h1>
      <div className="transcript-container">
        {transcript ? transcript : "Press start to record..."}
      </div>
      <div className="button-container">
        <button
          onClick={
            !listening
              ? SpeechRecognition.startListening
              : SpeechRecognition.stopListening
          }
        >
          {!listening ? "Start" : "Stop"}
        </button>
      </div>
    </div>
  );
};

export default SpeechBox;
