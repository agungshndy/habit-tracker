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
        { id : 1, name : "Morning run", streak : 1, isDoneToday : false },
        { id : 2, name : "Read 20 pages", streak : 10, isDoneToday : false},
        { id : 3, name : "Learn React", streak : 0, isDoneToday : false},
      ];
    }
  });

  const toggleHabit = (id) => {
        setHabits(prevHabits => updateHabitToggle(prevHabits, id))
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
      { id : Date.now(), name : name, streak : 0, isDoneToday : false}
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
