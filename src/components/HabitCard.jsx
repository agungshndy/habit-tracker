import { useState } from "react"

function HabitCard(){

    const [ streak,setStreak ] = useState(0);
    const [ button, setButton ] = useState("Check In");

    const toggleButton = () => {
        setButton("Done Today");
    }

    return (
        <div className="habitcard">
            <div className="section-1 grid-cols-2 text-sm border rounded-md mx-10">
                <div className="sectionbar-1 flex grid-cols-2 justify-around">
                    <div className="flex mx-2 my-2 gap-3">
                        <span>Morning run</span>
                        <p>{streak} day streak</p>
                    </div>
                    <button className="border rounded-md px-2 py-1 my-2 hover:cursor-pointer" onClick={toggleButton}>{button}</button>
                </div>
                <div className="sectionbar-2">
                    <div className="grid grid-cols-28 gap-1">
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                    </div>
                </div>
            </div>
            <div className="section-1 grid-cols-2 text-sm border rounded-md mx-10 my-5">
                <div className="sectionbar-1 flex grid-cols-3 justify-evenly">
                    <div className="flex mx-2 my-2 gap-3">
                        <span>Read 20 pages</span>
                        <p>{streak} day streak</p>
                    </div>
                    <button className="border rounded-md px-2 py-1 my-2 hover:cursor-pointer" onClick={toggleButton}>{button}</button>
                </div>
                <div className="sectionbar-2">
                    <div className="grid grid-cols-28 gap-1">
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                        <div className=" border rounded">X</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HabitCard