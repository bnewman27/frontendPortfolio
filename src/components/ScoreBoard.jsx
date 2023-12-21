import React from 'react';
import '../input.css';



const ScoreBoard = ({score, highscore}) => {
    return (
    <div className =" font-puffinChrome text-blue text-4xl grid grid-cols-2 gap-8 content-center">
        
        <div className=" bg-dms ring ring-blue ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">Score
            <div className="">{score}
            </div>
        </div>
        <div className=" bg-dms ring ring-blue ring-offset-2 ring-offset-dmbg shadow-inner shadow-dmbg rounded-full p-4">High Score
            <div className="">{highscore}</div>
        </div>
    </div>
    ) 

}

export default ScoreBoard;