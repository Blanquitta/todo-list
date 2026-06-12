// import TodoForm from "src/features/TodoForm.jsx";
// import TodoList from "src/features/TodoList/TodoList.jsx";
import { useState, useEffect } from "react";

export default function TodosPage({ token }) {
  // keep state
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

    setTodoList((previous) => [newTodo, ...previous]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );

    setTodoList(updatedTodos);
  }

  useEffect(() => {
    async function fetchTodos() {
      setIsTodoListLoading(true);
      setError("");

      try {
        const response = await fetch("/api/tasks", {
          method: "GET",
          headers: {
            "X-CSRF-TOKEN": token,
          },
          credentials: "include",
        });

        if (response.status === 401) {
          throw new Error("unauthorized");
        }

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        setTodoList(data.tasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsTodoListLoading(false);
      }
    }

    fetchTodos();
  }, [token]);

  return (
    <>
      <h1>My Todos</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isTodoListLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <>
          <TodoForm onAddTodo={addTodo} />

          <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
        </>
      )}
    </>
  );
}
