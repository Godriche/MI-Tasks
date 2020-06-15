import React from 'react'
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from 'react';
import { TaskListContext } from '../context/TaskListContext';



const TaskListItem = ({task}) => {
const { deleteTask} = useContext(TaskListContext)
  return (
    <li className="list-item">
       <span className="task-desc">{task.desc}</span>
       <div className="buttons">
         <button className="del-task" onClick={()=> deleteTask(task.id)}>
            <FontAwesomeIcon icon={faTrash} />
         </button>
         <button className="edit-task">
            <FontAwesomeIcon icon={faPen}/>
         </button>
       </div>
     </li>
  )
}

export default TaskListItem
