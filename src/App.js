import './App.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function App() {
  // setTimeout(console.log(transcript), 500)

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  SpeechRecognition.startListening({ continuous: true })

  // console.log(listening)

// start listening
// SpeechRecognition.startListening()


// stop listening
// SpeechRecognition.stopListening()

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {`This is the transcript contents: ${transcript}`}
        </p>
        
        <h1>{`Abe An An Appeal`}</h1>
        <span className="word">{`${transcript.split(" ").includes("a") ? "a" : ""}`}</span>
        <span className="word">{`${transcript.split(" ").includes("banana") ? "banana" : ""}`}</span>
        <span className="word">{`${transcript.split(" ").includes("peel") ? "peel" : ""}`}</span>
      </header>
    </div>
  )};

export default App;
