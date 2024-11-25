import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import To_do_List from './To-do-List'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <To_do_List/>
  </>)
}

export default App
