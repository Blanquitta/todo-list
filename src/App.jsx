
import './App.css'

import { useState } from "react";
import TodoForm from "./features/TodoForm.jsx";
import TodoList from "./features/TodoList/todoList.jsx";
function updateTodo(editedTodo) {
  const updatedTodos = todoList.map((todo) =>
    todo.id === editedTodo.id
      ? { ...editedTodo }
      : todo
  );

  setTodoList(updatedTodos);
}
  function App() {
  const [todos, setTodos] = useState([]);


function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      
      title,
      isCompleted: false,
    };

    setTodos(previous => [newTodo, ...previous]);
   
  }
function  completeTodo(id) {
  const updatedTodos = todos.map((todo)=>
   todo.id === id
      ? { ...todo, isCompleted: true }
      : todo
  )
      setTodos(updatedTodos)

}
 return (
    <>
      <h1>My Todos</h1>

      <TodoForm onAddTodo={addTodo} />;'
      
      
      <TodoList
      todoList={TodoList}
      onCompleteTodo={completeTodo}
      
      
    />
    </>
  );
} 
  
export default App;

