import React, { useState, useEffect } from "react";
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

  // !Checks Speech Recognition supported [speech-to-text]
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // !Checks Speech Synthesis supported [text-to-speech]
  if ("speechSynthesis" in window) {
    console.log("text-to-speech supported :)");
  } else {
    alert("Sorry, your browser doesn't support text to speech!");
  }

  // !Response to your input
  var msg = new SpeechSynthesisUtterance();
  var voices = window.speechSynthesis.getVoices();

  msg.text = `${transcript}`;
  msg.voice = voices[5];
  msg.volume = 1; // From 0 to 1
  msg.rate = 1; // From 0.1 to 10
  msg.pitch = 1; // From 0 to 2
  msg.lang = "en";

  if (!listening) {
    window.speechSynthesis.speak(msg);
  } else {
    window.speechSynthesis.cancel();
  }

  // !List of voices
  // speechSynthesis.getVoices().forEach(function (voice) {
  //   console.log(voice.name, voice.default ? voice.default : "");
  // });

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
        {/* <button
          onClick={() => {
            if (!listening) {
              window.speechSynthesis.speak(msg);
            } else {
              window.speechSynthesis.cancel();
            }
          }}
        >
          response
        </button> */}
      </div>
    </div>
  );
};

export default SpeechBox;
