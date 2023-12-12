import React from 'react';
import Board from './Board';
import '../input.css';


const ScoreBoard = ({score}) => {
    return (
    <div >
        <div className="font-serif">Score</div>
        <div>{score}</div>
        <Board />
    </div>
    ) 

}

export default ScoreBoard;