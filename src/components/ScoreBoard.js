const ScoreBoard = ({score}) => {
    return (
    <div className="score-board">
        <div clasName="scoreBoardHeader">Score</div>
        <div className="score">{score}</div>
        
    </div>
    ) 

}

export default ScoreBoard;