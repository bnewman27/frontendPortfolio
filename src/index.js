import React from 'react';
import ReactDOM from 'react-dom';
import './input.css';
import Navbar from './components/Navbar';
import Game from './components/Game';
import {getHighScores} from './components/ScoreBoard';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Navbar />
    <div className="grid grid-cols-3 bg-sky-950 font-puffinChrome drop-shadow-lg shadow-inner shadow-sky-950 text-sky-400 text-center p-4">
    <div className="col-span-1 h-full w-full text-6xl bg-sky-950 border-2 border-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">
      <div className="border-2 border-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">High Scores</div>
      <div className="border-2 border-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg p-4">{getHighScores()}</div>
      </div>
    <div className="col-span-2 border-2 border-sky-400 p-4"><Game /></div>
    
    </div>

    
  </React.StrictMode>,
  document.getElementById('root')
);

