import React from 'react';
import Board from './Board';
import '../index.css';


const ScoreBoard = ({score}) => {
    return (
    <div className ="h-56 grid grid-cols-3 gap-4 content-center" >
        <div className="">Score</div>
        <div>{score}</div>
        <Board />
    </div>
    ) 

}

export default ScoreBoard;