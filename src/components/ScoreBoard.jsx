import React from 'react';
import '../input.css';



const ScoreBoard = ({score, highscore}) => {
    return (
    <div className ="bg-dmbg font-serif p-16 grid grid-cols-4 gap-8 content-center">
        
        <div className=" bg-dms shadow-inner rounded-full p-4">Score</div>
        <div className=" bg-dms shadow-inner rounded-full p-4">{score}</div>
        <div className=" bg-dms shadow-inner rounded-full p-4">High Score</div>
        <div className=" bg-dms shadow-inner rounded-full p-4">{highscore}</div>

    </div>
    ) 

}

export default ScoreBoard;