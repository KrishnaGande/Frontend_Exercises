import React from "react";
import {useState} from 'react';

function InputBox(props) {
  taskArr=props;
  const [name,setName]=useState("")
  const handleInput = (e) => {
    // Add code here
    event.preventDefault;
    console.log(`Name: ${name}`);
    setName("");
    
  };
  const addTaskChild = () => {
    // Add code here
    taskArr.push(name)
    
  };
  return (
    <div className="inputbox">
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

      <button onClick={addTaskChild}>Add Task</button>
    </div>
  );
}

export default InputBox;
 