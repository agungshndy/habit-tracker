import { useState } from "react"

function StatsBar(){

    const [ streak,setStreak ] = useState(0);

    return (
        <div className="statsbar">
            <div className="section-1 grid-cols-2 text-sm border rounded-md mx-10">
                <div className="sectionbar-1 flex grid-cols-3 justify-evenly">
                    <div className="mx-2">
                        <p>Morning run</p>
                    </div>
                    <div className="mx-2">
                        <p>{streak} day streak</p>
                    </div>
                    <button className="border rounded-md px-2 py-1">Done Today</button>
                </div>
                <div className="sectionbar-2">
                    <p>null</p>
                </div>
            </div>
            <div className="section-2 flex text-sm">
                <p>Read 20 Pages</p>
                <button className="border">Check In</button>
            </div>
        </div>
    )
}

export default StatsBar