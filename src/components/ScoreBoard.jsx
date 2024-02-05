import React, { useState, useEffect } from 'react';
import '../input.css';
import resetScore from './Game';

const HIGH_SCORES = 'highScores';
const NO_OF_HIGH_SCORES = 5;

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
    }

    function setScore(newScore) {
        resetScore(newScore);
    }

    function endLevel() {
        checkHighScore(score);
        setTimer(60);
        setScore();
        getHighScores();
        showHighScores();
    }

    if (timer === 0) {
        return (
            <div className="font-puffinChrome text-sky-400 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl grid grid-cols-2 gap-8 text-center content-center">
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dms rounded-full xl:p-4 lg:p-4 md:p-1 sm:p-1 xs:p-1 xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl">
                    Timer
                    <div className="animate-ping xl:text-4xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl">{timer}</div>
                </div>
                <button onClick={endLevel} className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dms rounded-full p-4">
                    <div className="animate-pulse ">Next Level</div>
                </button>
            </div>
        );
    }

    if (timer !== 0) {
        return (
            <div className="font-puffinChrome text-sky-400 text-4xl grid grid-cols-2 gap-8 text-center content-center">
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dms rounded-full p-4">
                    Timer
                    <div className="animate-pulse">{timer}</div>
                </div>
                <div className="bg-sky-950 ring ring-sky-400 ring-offset-2 ring-offset-dmbg shadow-inner drop-shadow-lg shadow-dms rounded-full p-4">
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
        <ul className=" xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl font-puffinregular shadow-inner shadow-sky-950">
            {storedHighScores.map((score, index) => (
                <li key={index}>{score.name}: {score.score}</li>
            ))}
        </ul>
    );
}

export { ScoreBoard, getHighScores };
