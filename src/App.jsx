import TodoForm from "./TodoForm";
import './App.css'
import {useState} from 'react'; 

import TodoList from './TodoList.jsx';
  
 const todoList = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]
function App () {
  const [todos, setTodos] = useState(todoList) 


return (

  <div>
    <h1> My Todos</h1>
    <TodoForm />
    <TodoList  todoList ={todos}/>
  </div>

  );

}



export default App;