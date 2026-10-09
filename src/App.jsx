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
        { id : 1, name : "Morning run", history : [ "2026-10-03", "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07", "2026-10-08", "2026-10-09"] },
        { id : 2, name : "Read 20 pages", history : [ "2026-10-01", "2026-10-02", "2026-10-03", "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07"] },
        { id : 3, name : "Learn React", history : [ "2026-10-04", "2026-10-05", "2026-10-06", "2026-10-07", "2026-10-08"] },
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
      { id : Date.now(), name : name, history : [] }
    ]);
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
