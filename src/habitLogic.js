export function updateHabitToggle(habits, id) {
    return habits.map(habit => 
        habit.id === id 
        ? { ...habit, isDoneToday : !habit.isDoneToday, streak : habit.isDoneToday ? habit.streak - 1 : habit.streak + 1 }
        : habit
    )
}