import React, { ChangeEvent, FC, useState } from 'react';
import '../src/App.css'
import TodoTask from './Components/TodoTask';
import { ITask } from './Interfaces'



const App: FC = () => {

  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleChance = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

  const addTask = (): void => {
    const newTask = {taskName: task, deadLine: deadline};
    setTodoList([...todoList, newTask])
    
  };

  const completeTask = (taskNameToDelete: string):void => {
    setTodoList(todoList.filter((task)=> {
      // eslint-disable-next-line eqeqeq
      return task.taskName != taskNameToDelete
    }))
  }


  return (
    <div className="App">
      <div className = "header"> 
      <div className = "inputContainer">
      <input type = "text" placeholder="task" name = "task" onChange = {handleChance}></input>
        <input type = "number" placeholder = "Deadline (days)" name = "deadline" onChange= {handleChance}></input>
        </div>
        <button onClick = {addTask}> Add Task</button>
      
       
      </div>
      
        
        <div className = "todoList">

           {todoList.map((task: ITask, key: number) => {
          return <TodoTask key= {key} task= {task} completeTask = {completeTask}/>
        })}
      </div>
    </div>
  );
}

export default App;
