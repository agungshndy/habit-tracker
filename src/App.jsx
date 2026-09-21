import { useState } from 'react'
//import './App.css'
import Header from './components/Header'
import HabitModal from './components/HabitModal'
import StatsBar from './components/StatsBar'
import HabitList from './components/HabitList'

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
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

  function onAddClick() {
    setIsModalOpen(true)
    console.log("see if the button works");
    console.log(isModalOpen);
  }

  function onCloseClick() {
    setIsModalOpen(false)
    console.log("see if the close button works");
    console.log(isModalOpen);

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
      <StatsBar />
      <HabitList
      habits = {habits}
      onToggle = {toggleHabit}
      />
      <HabitModal
      isOpen = {isModalOpen}
      onClick = {onCloseClick}
      submitName = {addHabit}
      />
      
    </>
  )
}

export default App
