// import "./App.css";-

// import { useState } from "react";
// import TodoForm from "./TodoForm.jsx";
// import TodoList from "./todoList.js";
import SortBy from "./shared/SortBy";
import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "../hooks/useDebounce";
// new code
export default function TodosPage({ todosPage, dataVersion }) {

  const [dataVersionState, setDataVersion] = useState(0);
  const [filterTerm, setFilterTerm] = useState("");
  const debouncedFilterTerm = useDebounce(filterTerm, 300);
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);
  const invalidateCache = useCallback(() => {
    console.log("Invalidating memo cache after todo mutation");

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
}
catch (error) {
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

async function fetchTodos() {
  setIsTodoListLoading(true);
}
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
 
  useEffect(() => {
  fetchTodos();
}, [token, fetchTodos]);

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
      }
      catch (error) {
        setError(error.message);
      } finally {
        setIsTodoListLoading(false);

      }

  //   fetchTodos();
  // // }, 
  
  // // [token]);



  return (
    <>
      <h1>My Todos</h1>
      <TodoForm onAddTodo={addTodo} />

      <TodoList todoList={todos} onCompleteTodo={completeTodo} />
        
    </>
  )
    }
