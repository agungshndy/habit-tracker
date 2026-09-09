import { useState } from 'react'
//import './App.css'
import Header from './components/Header'
import HabitModal from './components/HabitModal'
import StatsBar from './components/StatsBar'
import HabitList from './components/HabitList'

function App() {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  
  function onAddClick(){
    setIsModalOpen(isModalOpen =>
    {isModalOpen ? "open form" : "close form"}
    )
  }

  return (
    <>
      <Header 
      onClick = {onAddClick}
      />
      <StatsBar />
      <HabitList />
      <HabitModal
      />
      
    </>
  )
}

export default App
