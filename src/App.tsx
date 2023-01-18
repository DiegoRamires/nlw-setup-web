import './styles/global.css'

import { Habit } from "./components/Habit"

function App() {
  return (
    <>
      <Habit completed={3} />
      <Habit completed={5} />
      <Habit completed={13} />
      <Habit completed={30} />
    </>
  )
}

export default App
