import React from 'react';
import '../input.css';

const HIGH_SCORES = 'highScores';
const NO_OF_HIGH_SCORES = 10;
const highScoreString = localStorage.getItem(HIGH_SCORES);
const highScores = JSON.parse(highScoreString) ?? [];


function checkHighScore(score) {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
    const lowestScore = highScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;
   
    
    if (score > lowestScore) {
      saveHighScore(score, highScores); // TODO
      showHighScores(); // TODO
    }
  }

  function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Enter name:');
    const newScore = { score, name };
    
    // 1. Add to list
    highScores.push(newScore);
  
    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);
    
    // 3. Select new list
    highScores.splice(NO_OF_HIGH_SCORES);
    
    // 4. Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
  };


const ScoreBoard = ({score, highScores}) => {
    return (
    <div className ="font-puffinChrome text-sky-400 text-4xl grid grid-cols-2 gap-8 text-center content-center">
        
        <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">Score
            <div className="">{score}
            </div>
        </div>
        <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">High Score
            <div className="">{checkHighScore(account.score)}
            </div>
        </div>
    </div>
    ) 

}

export default ScoreBoard;

