import { useState } from "react"

function HabitList(){
    const [ habits, setHabits ] = useState([
        { id : 1, name : "Morning run", streak : 1, isDoneToday : false },
        { id : 2, name : "Read 20 pages", streak : 10, isDoneToday : false},
        { id : 3, name : "Learn React", streak : 0, isDoneToday : false},
    ]);

    const toggleHabit = (id) => {
        setHabits(prevHabits =>
            prevHabits.map(habit =>
                habit.id === id 
                ? { ...habit, isDoneToday : !habit.isDoneToday, streak : habit.isDoneToday ? habit.streak - 1 : habit.streak + 1}
                : habit
            )
        )
    }

    return (
    <div className="habitcard">
        {habits.map(habit => (
            <HabitCard
            key={habit.id}
            name={habit.name}
            streak={habit.streak}
            isDoneToday={habit.isDoneToday}
            onToggle={()=> toggleHabit(habit.id)}
            />
        ))}
    </div>
    );
}



function HabitCard({name, streak, isDoneToday, onToggle}){

    return (
        <div className="habitcard">
            <div className="section-1 grid-cols-2 text-sm border rounded-md mx-10">
                <div className="sectionbar-1 flex grid-cols-2 justify-around">
                    <div className="flex mx-2 my-2 gap-3">
                        <span>{name}</span>
                        <p>{streak} day streak</p>
                    </div>
                    <button className="border rounded-md px-2 py-1 my-2 hover:cursor-pointer" onClick={onToggle}>{isDoneToday ? "Done Today" : "Check In"}</button>
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
            <br></br>
        </div>
    )
}

export default HabitList