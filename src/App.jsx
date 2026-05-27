// // import './App.css'
import { useState } from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

    setTodos((previous) => [newTodo, ...previous]);
  }
  function completeTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo,
    );
    setTodos(updatedTodos);
  }
  return (
    <>
      <h1>My Todos</h1>

      <TodoForm onAddTodo={addTodo} />
      <TodoList TodoList={TodoList} oncompleteTodo={completeTodo} />
    </>
  );
}

export default App;
