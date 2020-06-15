import React, {createContext, useEffect, useReducer} from 'react';
import AppReducer from '../context/AppReducer'
// import { useState } from 'react';

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || []
}

export const TaskListContext = createContext(initialState)

export const TaskListContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
    
  const addNewTask = task => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: task
    })
  }

  const clearTask = tasks => {
    dispatch({
      type: 'CLEAR_TASK',
      payload: tasks
    })
  }

  const deleteTask = id => {
    dispatch({
      type: 'DELETE_TASK',
      payload: id
    })
  }

  const findTask = id => {
    dispatch({
      type: 'FIND_TASK',
      payload: id
    })
  }


  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(state.tasks))
  }, [state.tasks])

  return(
    <TaskListContext.Provider value={{
      tasks: state.tasks,
      addNewTask, deleteTask, clearTask, findTask
      }} >
      {children}
    </TaskListContext.Provider>
  )
}

