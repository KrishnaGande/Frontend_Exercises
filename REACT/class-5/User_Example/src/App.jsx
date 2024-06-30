import { useState } from 'react'
import './App.css'
import User from './Components/User_example';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User/>
    </>
  )
}

export default App
