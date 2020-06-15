import React from 'react'
import { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import { useState } from 'react'
import { uuid } from 'uuidv4'

const TaskInputForm = () => {
 const {addNewTask, clearTask} = useContext(TaskListContext)
 
 const [task, setTask] = useState({
   desc: ""
 })

  const {desc} = task


 const updateTask = (e) => {
   setTask({[e.target.name]: e.target.value})
 }

 const clearAllTask = () => {
   setTask({})
   clearTask()
 }


 const submitTaskUpdate = e => {
   e.preventDefault()
   const newTask = {
     id: uuid(),
     desc,
   }
   
   setTask({
     desc: ""
   })

  addNewTask(newTask)
 }


  return (
    <form className="task-form" onSubmit={submitTaskUpdate}>
      <input 
       type="text"
       name="desc"
       value={desc}
       placeholder="Add Tasks"
       className="task-input"
       autoComplete="off"
      required
      onChange={updateTask}
       />
      <div className="form-btn">
          <button type="submit" className="add-task-btn">Add Tasks</button>
          <a href="#a" className="clear-task-btn" onClick={clearAllTask}>Clear Tasks</a>
      </div>
    </form>
  )
}

export default TaskInputForm
