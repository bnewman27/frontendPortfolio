const ScoreBoard = ({score}) => {
    return (
    <div className=" rounded-lg w-20 h-1/2  bg-white text-center">
        <div className="rounded-lg w-20 h-6 bg-white">
        <div className="">Score</div>
        <div>{score}</div>
        </div>
    </div>
    ) 

}

export default ScoreBoard;