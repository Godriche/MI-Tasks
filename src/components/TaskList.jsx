import React from 'react'
import { useContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import TaskListItem from './TaskListItem'


const TaskList = () => {
  const {tasks} = useContext(TaskListContext)
  return (
    <div>
      <h4 className="task-number">Available Tasks: {tasks.length}</h4>
    <ul className="task-list">
      {tasks.map(task => (
        <TaskListItem task={task} key={task.id} />
      ))}
   </ul> 
   </div>
  )
}

export default TaskList
