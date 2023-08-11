import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Button from '../../components/Button/Button';
import "./Gabs.scss";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import Keyword from '../../components/Keyword/Keyword';


const Gabs = () => {
    const [gabsArray, setGabsArray] = useState([]);
    const [currentGab, setCurrentGab] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // setTimeout(console.log(transcript), 500)

    const { level } = useParams();
    

  const {
    transcript,
    // listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const []
  const handleStartListening = () => {
    SpeechRecognition.startListening({ continuous: true });
    console.log("listening");
    

  }

  const handleStopListening = () => {
    SpeechRecognition.stopListening();
    console.log("stop listening");
  }
  console.log(transcript)
  function getRandomNumber() { return Math.floor(Math.random() * 10) + 1; }

  useEffect(() => {
    axios
        .get(`http://localhost:8080/${level}`)
        .then((res) => {
            let data = res.data;
            // console.log(data)
            setGabsArray(data);
            let randomIndex =getRandomNumber();
            setCurrentGab(data[randomIndex]);
            
            setTimeout(() => setIsLoading(false), 500);
        })
        console.log(gabsArray)
        console.log(currentGab)
  },[]);
  
// console.log(randomIndex);
  

// start listening
// SpeechRecognition.startListening()


// stop listening
// SpeechRecognition.stopListening()


if (isLoading) {
    return <Loading />
  }
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
    return (
        <div>
            {transcript}
           <h2>{currentGab ? currentGab[0][0] : ""}</h2>
           <div className='gab-answer'>
           {currentGab &&
            currentGab[1].map((word, i) => {
                return(<Keyword word={word} trasncript={transcript}/>)
           
           })}
           </div>
           <Button text={"Start Listening"} onClick={handleStartListening}/>
           <Button text={"Stop Listening"} onClick={handleStopListening} />
        </div>
    );
};

export default Gabs;