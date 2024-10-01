import React from 'react';
import Navbar from './Navbar';
import './PlayGame.css';

const PlayGame = () => {

  const handleChoice = (choice) => {
    console.log(`You selected: ${choice}`);
  };

  return(

      <div>
        
  
        {/* Quiz Content */}
        <div className="quiz-container">
          <h1 className="quiz-title">QUIZ TITLE</h1>
          <div className="quiz-choices">
            <button className="choice-btn" onClick={() => handleChoice('Choice 1')}>Choice 1</button>
            <button className="choice-btn" onClick={() => handleChoice('Choice 2')}>Choice 2</button>
            <button className="choice-btn" onClick={() => handleChoice('Choice 3')}>Choice 3</button>
          </div>
        </div>
      </div>
    );
  };

export default PlayGame;
