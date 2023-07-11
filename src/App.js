import {useState, useEffect } from 'react'
// import { useEffect, useState } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Container from './components/container';
import Header from './components/Header';
import InputTask from './components/InputTask';
import TaskContent from './components/TaskContent';


function App() {
// pasar la tarea a localstorgas
  let initialTask = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTask) {
    initialTask =[];
   }

  const [tasks, setTasks] = useState(initialTask);

   useEffect(() =>{
    if (initialTask) {
      localStorage.setItem("tasks",JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks",JSON.stringify([]));
    }
   }, [initialTask,tasks]);


  const createTask = (task) => {
  
   setTasks([...tasks, task]);
  // // // //  console.log(tasks);
  }

  const deleteTask =(id) =>{
    const currentTask = tasks.filter((task) => task.idTask !== id);
    setTasks(currentTask);
  }

   //console.log(tasks);

  return (
    <Container >
    <Header></Header>
    <InputTask createTask={createTask}></InputTask>
    <TaskContent tasks={tasks} deleteTask={deleteTask}></TaskContent>
    </Container> 
  );
}

export default App;
 