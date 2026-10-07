import { useState, useEffect } from 'react'
//import './App.css'
import Header from './components/Header'
import HabitModal from './components/HabitModal'
import StatsBar from './components/StatsBar'
import HabitList from './components/HabitList'
import { updateHabitToggle } from './habitLogic'

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ habits, setHabits ] = useState(()=>{
    const saved = localStorage.getItem("habits");
    if (saved) {
      return JSON.parse(saved)
    } else {
      return [
        { id : 1, name : "Morning run", history [...dates], streak : 1, isDoneToday : false },
        { id : 2, name : "Read 20 pages", history [...dates], streak : 10, isDoneToday : false},
        { id : 3, name : "Learn React", history [...dates], streak : 0, isDoneToday : false},
      ];
    }
  });

  const toggleHabit = (id) => {
        setHabits(prevHabits => updateHabitToggle(prevHabits, id))
    }

  const deleteHabit = (id) => {
        setHabits(prevHabits => 
          prevHabits.filter(habit => habit.id !== id)
        )
    }

  useEffect(()=> {
      localStorage.setItem("habits", JSON.stringify(habits))
    }, [habits])

  function onAddClick() {
    setIsModalOpen(true)
  }

  function onSubmitClick() {
    setIsModalOpen(false)
  }

  function addHabit(name) {
    setHabits(prevHabits => [
      ...prevHabits,
      { id : Date.now(), name : name, history : [], streak : 0, isDoneToday : false}
    ]);
  }

  function getStreak(history) {

    function getDateDaysAgo(n){
    
      let d = new Date();
      d.setDate(d.getDate() - n);
    
      return d.toISOString().split("T")[0]
  }
  
    let streak = 0;
    let daysAgo = 0;

    while ( history.includes(getDateDaysAgo(daysAgo)) ) {

    }
  }

  function isDoneToday(history) {
    return history.includes(getToday());
  }

  function getToday() {
    return new Date().toISOString().split("T")[0];
  }

  return (
    <>
      <Header 
      onClick = {onAddClick}
      />
      <StatsBar 
      habits = {habits}
      />
      <HabitList
      habits = {habits}
      onToggle = {toggleHabit}
      onClick = {deleteHabit}
      />
      <HabitModal
      isOpen = {isModalOpen}
      onClick = {onSubmitClick}
      submitName = {addHabit}
      />
      
    </>
  )
}

export default App
