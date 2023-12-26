import React, { useState, useEffect } from 'react';
import '../input.css';

const HIGH_SCORES = 'highScores';
const NO_OF_HIGH_SCORES = 10;

function ScoreBoard({ score }) {
    const [highScores, setHighScores] = useState([]);
    const [timer, setTimer] = useState(60);

    useEffect(() => {
        showHighScores();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        if (timer === 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timer]);

    function showHighScores() {
        const storedHighScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
        setHighScores(storedHighScores);
    }

    function checkHighScore(score) {
        const storedHighScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
        const lowestScore = storedHighScores[NO_OF_HIGH_SCORES - 1]?.score ?? 0;

        if (score > lowestScore) {
            saveHighScore(score, storedHighScores);
            showHighScores();
        }
    }

    function saveHighScore(score, storedHighScores) {
        const name = prompt('You got a highscore! Enter name:');
        const newScore = { score, name };

        storedHighScores.push(newScore);
        storedHighScores.sort((a, b) => b.score - a.score);
        storedHighScores.splice(NO_OF_HIGH_SCORES);
        localStorage.setItem(HIGH_SCORES, JSON.stringify(storedHighScores));
        console.log(storedHighScores);
    }

    function endLevel() {
        checkHighScore(score);
        setTimer(60);
    }

    if (timer === 0) {
        return (
            <div className="font-puffinChrome text-sky-400 text-4xl grid grid-cols-2 gap-8 text-center content-center">
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg rounded-full p-4">
                    Timer
                    <div className="animate-pulse">{timer}</div>
                </div>
                <button onClick={endLevel} className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg rounded-full p-4">
                    <div className="animate-pulse">Next Level</div>
                </button>
            </div>
        );
    }

    if (timer !== 0) {
        return (
            <div className="font-puffinChrome text-sky-400 text-4xl grid grid-cols-2 gap-8 text-center content-center">
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg rounded-full p-4">
                    Timer
                    <div className="animate-pulse">{timer}</div>
                </div>
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dmbg rounded-full p-4">
                    Score
                    <div>{score}</div>
                </div>
            </div>
        );
    }
}

function getHighScores() {
    const storedHighScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];

    return (
        <ul className="text-5xl font-puffinLiquid">
            {storedHighScores.map((score, index) => (
                <li key={index}>{score.name}: {score.score}</li>
            ))}
        </ul>
    );
}

export { ScoreBoard, getHighScores };
