import React from 'react';
import './App.css'
import Header from './components/Header';
import TaskInputForm from './components/TaskInputForm';
import TaskList from './components/TaskList';
import { TaskListContextProvider } from './context/TaskListContext';

const App = () => {

    return (
      <TaskListContextProvider>
     <div className="app-wrapper">
       <div className="app">
         <div className="app-content">
          <Header />
          <TaskInputForm />
          <TaskList />
         </div>
       </div>
      </div>
      </TaskListContextProvider>      
    );
  }


export default App;
