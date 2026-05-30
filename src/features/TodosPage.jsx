import TodoList from "./todoList.js";

import { useState, useEffect, useCallback } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodosPage({ todosPage, dataVersion }) {
  const [dataVersionState, setDataVersion] = useState(0);
  const [filterTerm, setFilterTerm] = useState("");
  const debouncedFilterTerm = useDebounce(filterTerm, 300);
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);
  const [sortBy, setSortBy] = useState("creationDate"); // Default sorting by creation date
  const [sortDirection, setSortDirection] = useState("desc"); // Default descending order
  const fetchTodos = async () => {
    try {
      const params = new URLSearchParams({
        sortBy,
        sortDirection,
      });

      const response = await fetch(`${TODOS_ENDPOINT}?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error(error);
    }
  };
  const invalidateCache = useCallback(() => {
    console.log("Invalidating memo cache after todo mutation");
    // new codeadded

    const fetchTodos = async () => {
      const params = new URLSearchParams({
        sortBy,
        sortDirection,
      });

      const response = await fetch(`/api/tasks?${params}`);
      // Handle the response, like setting the state for your todos
    };
    // new code added
    useEffect(() => {
      fetchTodos();
    }, [sortBy, sortDirection]);

    setDataVersion((prev) => prev + 1);
  }, []);

  const paramsObject = {
    sortBy,
    sortDirection,
  };

  try {
    if (debouncedFilterTerm) {
      paramsObject.find = debouncedFilterTerm;
    }
    setTodoList((previous) =>
      previous.map((todo) => (todo.id === tempId ? savedTodo : todo)),
    );
  } catch (error) {
    if (
      debouncedFilterTerm ||
      sortBy !== "creationDate" ||
      sortDirection !== "desc"
    ) {
      setFilterError(`Error filtering/sorting todos: ${error.message}`);
    } else {
      setError(`Error fetching todos: ${error.message}`);
    }
  } finally {
    invalidateCache();
  }
  // new code
  const params = new URLSearchParams(paramsObject);

  // const resp = await fetch(`/api/tasks?${params}`, options);

  // new
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

  setError("");

  try {
    const response = async;
    fetch("/api/tasks", {
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

    const data = response.json();

    setTodoList(data.tasks);
  } catch (error) {
    setError(error.message);
  } finally {
    setIsTodoListLoading(false);
  }

  //   fetchTodos();
  // // },

  // [token]);

  return (
    <>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />

      <TodoList todoList={todos} onCompleteTodo={completeTodo} />
    </>
  );
}
