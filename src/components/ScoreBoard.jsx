const ScoreBoard = ({score}) => {
    return (
    <div className=" rounded-lg w-20 h-1/2  bg-slate-600 text-center">
        <div className="rounded-lg w-20 h-6 bg-slate-600 ">
        <div className="">Score</div>
        <div>{score}</div>
        </div>
    </div>
    ) 

}

export default ScoreBoard;