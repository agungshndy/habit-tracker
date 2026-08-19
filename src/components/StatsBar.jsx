import { useState } from "react"

function StatsBar() {

    const [ stats,setStats ] = useState(3);
    const [ completion,setCompletion ] = useState(75);
    const [ streak, setStreak ] = useState(20);

    return (
        <div className="statsbar mt-5">
            <div className="flex gap-4 justify-around">
                <div className="grid-rows-2 w-auto p-5 ml-10 my-5 text-left">
                    <p className="text-xs">Habits tracked</p>
                    <p className="text-lg">{stats}</p>
                </div>
                <div className="grid-rows-2 w-auto p-5 m-5 text-left">
                    <p className="text-xs">Today's completion</p>
                    <p className="text-lg">{completion} %</p>
                </div>
                <div className="grid-rows-2 w-auto p-5 mr-10 my-5 text-left">
                    <p className="text-xs">Best streak</p>
                    <p className="text-lg">{streak} days</p>
                </div>
            </div>    
        </div>
    )
}

export default StatsBar