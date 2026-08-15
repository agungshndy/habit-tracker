import { useState } from "react"

function HabitCard() {

    const [ habit,setHabit ] = useState(0);
    const [ completion,setCompletion ] = useState(0);
    const [ streak, setStreak ] = useState(0);

    return (
        <div className="mt-5">
            <div className="flex gap-4 justify-around">
                <div className="grid-rows-2 w-auto p-5 ml-10 my-5 text-left">
                    <p className="text-xs">Habits tracked</p>
                    <p className="text-lg">{habit}</p>
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

export default HabitCard