// rfce
import React, { useState } from "react";
import List from "./List";
import InputBox from "./inputBox";

function Todo() {
  const [tasksArr, setTasks] = useState([]);
  const addTask = (inputValue) => {
    // Complete the function
    taskArr.push(inputValue)
  };

  const handleDelete = (idx) => {
    // Complete the function
    taskArr.pop(idx)
  };

  return (
    // react Fragments
    <>
      <InputBox addTask={addTask} />
      <List tasksArr={tasksArr} handleDelete={handleDelete}></List>
    </>
  );
}

export default Todo;
