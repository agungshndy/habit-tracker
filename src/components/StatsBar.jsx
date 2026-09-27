import { useState } from "react"

function StatsBar({habits}) {

    const [ completion,setCompletion ] = useState(75);
    const streakValues = habits.map(habit => habit.streak);
    const bestStreak = Math.max(...streakValues);

    return (
        <div className="statsbar mt-5">
            <div className="flex gap-4 justify-around">
                <div className="grid-rows-2 w-auto p-5 ml-10 my-5 text-left">
                    <p className="text-xs">Habits tracked</p>
                    <p className="text-lg">{habits.length}</p>
                </div>
                <div className="grid-rows-2 w-auto p-5 m-5 text-left">
                    <p className="text-xs">Today's completion</p>
                    <p className="text-lg">{completion} %</p>
                </div>
                <div className="grid-rows-2 w-auto p-5 mr-10 my-5 text-left">
                    <p className="text-xs">Best streak</p>
                    <p className="text-lg">{bestStreak} days</p>
                </div>
            </div>    
        </div>
    )
}

export default StatsBar