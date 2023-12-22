import React from 'react';
import '../input.css';



const ScoreBoard = ({score, highscore}) => {
    return (
    <div className ="font-puffinChrome text-sky-400 text-4xl grid grid-cols-2 gap-8 text-center content-center">
        
        <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">Score
            <div className="">{score}
            </div>
        </div>
        <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">High Score
            <div className="">{highscore}</div>
        </div>
    </div>
    ) 

}

export default ScoreBoard;