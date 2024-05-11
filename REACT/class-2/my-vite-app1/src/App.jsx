import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayData from './components/Displaydata'
import ConditionalRendering from './components/ConditionalRendering'
import Button from '../Button'

function App() {
  const fruits=["Apple","Banana","Cherry"];
  const person={
    name:"Alice",
    age:25
  };
  const isLoggedIn=true;
  return (
    <div>
      <h1>React Props Example</h1>
      <DisplayData fruits={fruits} person={person}/>
      <ConditionalRendering isLoggedIn={isLoggedIn} username={person.name}/>
      <Button/>
    </div>
  )
}

export default App
