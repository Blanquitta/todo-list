import { useState } from "react";
import TodoForm from "src/features/TodoForm.jsx";
import TodoList from "src/features/TodoList/TodoList.jsx";

export default function TodosPage({ token }) {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  function updateTodo(editedTodo) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === editedTodo.id ? { ...editedTodo } : todo,
    );

    setTodoList(updatedTodos);
  }

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
      <TodoForm onAddTodo={addTodo} />

      <TodoList todoList={todos} onCompleteTodo={completeTodo} />
    </>
  );
}
