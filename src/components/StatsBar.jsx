import { getStreak, isDoneToday } from "../habitLogic";

function StatsBar({habits}) {

    const streakValues = habits.map(habit => getStreak(habit.history));
    const bestStreak = Math.max(0, ...streakValues);
    const dailyComp = habits.filter(habit => isDoneToday(habit.history));
    const comp = dailyComp.length;
    const total = habits.length;
    const completion = total === 0 ? 0 : Math.round((comp/total) * 100);    
    console.log(streakValues);
    console.log(typeof(streakValues));
    console.log(typeof(bestStreak));

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