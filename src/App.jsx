import "./App.css";

import { useState } from "react";
import TodoForm from "./features/TodoForm.jsx";
import TodoList from "./features/TodoList/todoList.jsx";

function App() {
  const [todos, setTodos] = useState([]);

  // new todo added
  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

    setTodos((previous) => [newTodo, ...previous]);
  }

  //  completed
  function completeTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo,
    );
    setTodos(updatedTodos);
  }

  // Update an existing todo
  function updateTodo(editedTodo) {
    const updatedTodos = todos.map((todo) =>
      todo.id === editedTodo.id ? { ...editedTodo } : todo,
    );
    setTodos(updatedTodos);
  }

  return (
    <>
      <h1>My Todos</h1>

      <TodoForm onAddTodo={addTodo} />

      <TodoList
        todoList={todos}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </>
  );
}

export default App;
