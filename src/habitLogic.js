export function updateHabitToggle(habits, id) {
    
    const today = getToday();

    return habits.map(habit => {
        
        if ( habit.id !== id ){ 
        return habit
       }

       if (habit.history.includes(today)) {
        return { ...habit, history : habit.history.filter(date => date !== today) }
       } else {
        return { ...habit, history : [...habit.history, today] }
       }
    });

}

export function getDateDaysAgo(n){
          let d = new Date();
          d.setDate(d.getDate() - n);
          return d.toISOString().split("T")[0]
}

export function getStreak(history) {
      
        let streak = 0;
        let daysAgo = isDoneToday(history) ? 0 : 1;
    
        while ( history.includes(getDateDaysAgo(daysAgo)) ) {
          streak += 1;
          daysAgo += 1;
        }
        return streak;
}

export function isDoneToday(history) {
        return history.includes(getToday());
}

export function getToday() {
        return new Date().toISOString().split("T")[0];
}