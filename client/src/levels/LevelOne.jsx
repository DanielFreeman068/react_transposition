import React, { useState, useRef } from 'react';
import Timer from '../components/Timer'
import ProgressBar from '../components/Progress';
import words from '../data/words'
import { useNavigate } from 'react-router-dom';

function LevelOne() {
  const navigate = useNavigate();
  //level one word options
  const LevelWords = words.levelOne;
  //array helping with dupes
  const selectedWords = useRef([]);
  //array for clearing all text boxes
  const inputsRef = useRef([]);
  
    //function to grab random word and make sure its not a dupe
    const getRandomWord = () => {
      if (selectedWords.current.length >= LevelWords.length) {
        selectedWords.current = [];
      }
  
      let availableWordIndex;
      do {
        availableWordIndex = Math.floor(Math.random() * LevelWords.length);
      } while (selectedWords.current.includes(availableWordIndex));
  
      selectedWords.current.push(availableWordIndex);
  
      return LevelWords[availableWordIndex];
    }
  
  // Example: Pick a random word object
  let randomCipher = getRandomWord();

  const username = localStorage.getItem('username');
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState('one');
  const [hint, setHint] = useState(randomCipher.hint);
  const [key, setKey] = useState(randomCipher.cipherKey);
  const [originalText, setOriginalText] = useState(randomCipher.originalText);
  const [cipherText, setCipherText] = useState(randomCipher.cipherText);
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [quitBox, setQuitBox] = useState(false)
  const [progress, setProgress] = useState(0);
  const [progressFiller, setProgressFiller] = useState(0);
  const [hintTime, setHintTime] = useState(0);
  const [currentPuzzleCount, setCurrentPuzzleCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  //function to deal with pulling new words for the other levels
  const manageLevel = async(count) => {
    setProgress(prev => prev + 188);
    setProgressFiller(prev => prev + 36);
    if(count < 2){
      randomCipher = getRandomWord();
      setCipherText(randomCipher.cipherText);
      setOriginalText(randomCipher.originalText);
      setKey(randomCipher.cipherKey);
      setHint(randomCipher.hint);
      clearInputs();
      setUserGuess('');
    } else {
      setIsRunning(false);
    }
  }

  //function to handle the all three puzzles completing
  const handleLevelComplete = async (level, time) => {
    try {
      const response = await fetch('https://react-transposition-backend.onrender.com/LevelOne', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, time, level}),
      });
      console.log(response);
      setLevel('one');
      setScore(time)
    } catch (error) {
      console.error('Error during request', error);
    }
  };

  // Check the user's guess
  const handleGuess = () => {
    if (userGuess.toLowerCase().trim() === originalText.toLowerCase()) {
      setCurrentPuzzleCount(prev => prev + 1)
      setFeedback('Congratulations! You cracked the code!');
      manageLevel(currentPuzzleCount)
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  // Provide a hint
  const handleHint = (addedTime) => {
    alert(hint);
    setHintTime(addedTime);
  };

  // Function to clear all inputs
  const clearInputs = () => {
    inputsRef.current.forEach(input => {
      input.value = '';
    });
  };

  return (
    <>
      {/* end screen */}
      {!isRunning && (<div className='end-screen-container'>
        <h1>Level Completed!</h1>
        <div className="end-star-group">
        <i id='end-star' className={`fas fa-star 
            ${score > 0 ? "gold" : ""}`}></i>
        <i id='end-star' className={`fas fa-star 
            ${score > 0 && score < 120000 ? "gold" : ""}`}></i>
        <i id='end-star' className={`fas fa-star 
            ${score > 0 && score < 60000 ? "gold" : ""}`}></i>
        </div>
        <button onClick={()=>navigate('/levels')} className="end-button">Finish</button>
      </div>)}
      {/* quit and timer component in top corners */}
      <button onClick={()=> setQuitBox(true)} className="back-button">Quit</button>
      <Timer isRunning={isRunning} addedTime={hintTime} level={level} onLevelComplete={handleLevelComplete}/>
      {quitBox && (<div className='quit-container'>
        <button className='x-button' onClick={()=> setQuitBox(false)}>x</button>
        <h1 className="quit-text">Are you sure you want to quit? All progress will be lost</h1>
        <button className="quit-button" onClick={()=>navigate('/levels')}>Confirm</button>
      </div>)}
      <div className="transposition-container">
        <header>
          <h1>Easy</h1>
        </header>
        {/* progress bar component */}
        <ProgressBar progress={progress} progressFiller={progressFiller}/>
        <div className="cipher-column-display">
        {[...Array(key.length)].map((_, index) => (
          <div key={index} className="column-header">{index + 1}</div>
        ))}
          <div className="columns-container">
            {/* creates needed columns for user interaction */}
            {[0, 1, 2].map(colIndex => (
              <div key={colIndex} className="column">
                {[0, 1, 2].map(rowIndex => (
                  <div key={rowIndex} className="column-cell">
                    <input type="text" maxLength={1} className="cell-input" onInput={(e) => e.target.value = e.target.value.slice(0, 1)} ref={(el) => el && inputsRef.current.push(el)}/>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="cipher-info">
          {/* displays info for user */}
          <p>Cipher Text: {cipherText.toUpperCase()}</p>
          <p>Key: {key.join(' ')}</p>
          {/* guessingg input and submit section */}
          <div className="guess-section">
            <div className="input-container">
              <input
                type="text"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                placeholder="Enter the original text"
                className="guess-input"
              />
              <button className='submit-button' onClick={()=>handleHint(prev => prev + 30000)}>Get Hint</button>
            </div>
          </div>
          {/* submit button and feedback */}
          <button onClick={handleGuess} className="hint">Submit</button>
          {feedback && <p className="feedback">{feedback}</p>}
        </div>
      </div>
    </>
  );
}

export default LevelOne;