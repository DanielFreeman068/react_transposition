import React, { useState, useEffect } from 'react';
import './index.css';

function Transposition() {
  const [key] = useState([3, 1, 2]);
  const [originalText] = useState('trick-hat');
  const [cipherText] = useState('hat-trick');
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  // Check the user's guess
  const handleGuess = () => {
    if (userGuess.toLowerCase().trim() === originalText.toLowerCase()) {
      setFeedback('Congratulations! You cracked the code!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  // Provide a hint
  const handleHint = () => {
    setShowHint(true);
  };

  return (
    <div className="transposition-container">
      <h2>Transposition Cipher Decryption Challenge</h2>
      <div className="cipher-column-display">
        {key.map((colNum, index) => (
          <div key={index} className="column-header">{colNum}</div>
        ))}
        <div className="columns-container">
          {[0, 1, 2].map(colIndex => (
            <div key={colIndex} className="column">
              {[0, 1, 2].map(rowIndex => (
                <div key={rowIndex} className="column-cell">
                  {/* Empty cells */}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="cipher-info">
        <p>Cipher Text: {cipherText}</p>
        <p>Key: {key.join('')}</p>
        <div className="guess-section">
          <input 
            type="text" 
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
            placeholder="Enter the original text"
            className="guess-input"
          />
          <button onClick={handleGuess}>Submit Guess</button>
          <button onClick={handleHint}>Get Hint</button>
        </div>
        {feedback && <p className="feedback">{feedback}</p>}
        {showHint && (
          <div className="hint">
            <p>Hint: This is a column transposition cipher</p>
            <p>The key {key.join('')} rearranges the columns</p>
            <p>You need to figure out the original text that, when rearranged, creates the cipher text</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Transposition;