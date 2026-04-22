import TodoForm from "./TodoForm";
import './App.css'
import {useState} from 'react'; 

import TodoList from './TodoList.jsx';
  


function App () {


return (

  <div>
    <h1> My Todos</h1>
    <TodoForm />
    <TodoList  todoList ={todoList}/>
  </div>

  );

}



export default TodoList;