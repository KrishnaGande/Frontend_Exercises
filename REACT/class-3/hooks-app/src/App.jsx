import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentCounter from './Parent'
import TemperatureInput from './TemperaureInput'
import TemperatureDisplay from './TemperatureDisplay'

function App() {
  const [temperature,setTemperature]=useState("");

  const handleTemperatureChange=(newTemperature)=>{
    setTemperature(newTemperature);
  };
  return (
    <div className='App'>
      <TemperatureInput temperature={temperature}
      onTemperatureChange={handleTemperatureChange}/>
      <TemperatureDisplay temperature={temperature}/>
    </div>
  );
}

export default App
