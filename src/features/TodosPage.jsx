// }
import { useState, useEffect, useCallback } from "react";

import TodoForm from "./TodoForm";

export default function TodosPage({ token }) {
  //  local state
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  // state order
  const [sortBy, setSortBy] = useState("creationDate");
  const [sortDirection, setSortDirection] = useState("desc");

  // 2. feth API sortBy y sortDirection
  const fetchTodos = useCallback(async () => {
    setIsTodoListLoading(true);
    setError("");
    try {
      // URL using state
      const params = new URLSearchParams({
        sortBy: sortBy,
        sortDirection: sortDirection,
      });

      const response = await fetch(`/api/tasks?${params.toString()}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": token,
        },
      });

      if (response.status === 401) throw new Error("Unauthorized");
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();

      setTodoList(data.tasks || data);
    } catch (err) {
      setError(`Error fetching todos: ${err.message}`);
    } finally {
      setIsTodoListLoading(false);
    }
  }, [sortBy, sortDirection, token]); //execute token

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  // interaction functions
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

  return (
    <>
      <h1>My Todos</h1>
      // Control of function changes
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setSortBy("title")}>Order by Title</button>
        <button
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
        >
          Direction ({sortDirection})
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <TodoForm onAddTodo={addTodo} />
      {isTodoListLoading ? (
        <p>Loading tasks...</p>
      ) : (
        <TodoList todoList={todoList} onCompleteTodo={completeTodo} />
      )}
    </>
  );
}
