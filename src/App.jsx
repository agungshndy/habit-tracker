import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
//import './App.css'
import Header from './components/Header'
import HabitCard from './components/HabitCard'
import HabitModal from './components/HabitModal'
import StatsBar from './components/StatsBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HabitCard />
      <HabitModal />
      <StatsBar />
    </>
  )
}

export default App
