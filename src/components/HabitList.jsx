import { getStreak, isDoneToday } from "../habitLogic";

function HabitList({habits : habits ,onToggle : toggleHabit, onClick : deleteHabit}){

    return (
    <div className="habitcard">
        {habits.map(habit => (
            <HabitCard
            key={habit.id}
            name={habit.name}
            history={habit.history}
            streak={getStreak(habit.history)}
            isDoneToday={isDoneToday(habit.history)}
            onToggle={()=> toggleHabit(habit.id)}
            onDelete={()=> deleteHabit(habit.id)}
            />
        ))}
    </div>
    );
}

function HabitCard({name, streak, isDoneToday, onToggle, onDelete}){

    return (
        <div className="habitcard">
            <div className="section-1 grid-cols-2 text-sm border rounded-md mx-10">
                <div className="sectionbar-1 flex grid-cols-2 justify-around">
                    <div className="flex mx-2 my-2 gap-3">
                        <span>{name}</span>
                        <p>{streak} day streak</p>
                    </div>
                    <button className="border rounded-md px-2 py-1 my-2 hover:cursor-pointer" onClick={onToggle}>{isDoneToday ? "Done Today" : "Check In"}</button>
                    <button className="border rounded-md px-2 py-1 my-2 hover:cursor-pointer" onClick={onDelete}>Delete</button>
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