import React from 'react';
import Game from './Game';
import '../input.css';
import { getHighScores } from './ScoreBoard';





const GamePage = () => {
    return (
    <div className="grid grid-cols-3 bg-sky-950 font-puffinChrome drop-shadow-lg shadow-inner shadow-dmbg text-sky-400 text-center p-4">
        <div className="col-span-1 h-full w-full text-6xl bg-gradient-tr from-sky-900 via-sky-800 to-sky-950 border-2 border-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">
            <div className="border-2 border-sky-400 bg-sky-950 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">High Scores</div>
            <div className="border-2 border-sky-400 bg-sky-950 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">{getHighScores()}</div>
        </div>
        <div className="col-span-2 border-2 border-sky-400 p-4"><Game /></div>
    
    </div>
    );
};

export default GamePage;
