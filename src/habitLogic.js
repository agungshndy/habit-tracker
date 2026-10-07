export function updateHabitToggle(habits, id) {
    
    const today = new Date().toISOString().split("T")[0];

    return habits.map(habit => {
        
        if ( habit.id !== id ){ 
        return habit
       }

       if (habit.history.includes(today)) {

       } else {
        
       }
    });
}