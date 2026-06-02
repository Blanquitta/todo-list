import { useState, useEffect, useCallback } from "react";
import TodoList from "./TodoList/TodoListItem";
import TodoForm from "./TodoForm";
import SortBy from "../shared/SortBy.jsx";
import useDebounce from "./useDebounce.js";
const initialState = {
  todoList: [],
  error: "",
  filterError: "",
  isTodoListLoading: false,
  sortBy: "creationDate",
  sortDirection: "desc",
  filterTerm: "",
  dataVersion: 0,
};
import {
  todoReducer,
  initialTodoState,
  TODO_ACTIONS,
} from "../../reducers/todoReducer";

export default function TodosPage() {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState("");
  const [filterError, setFilterError] = useState("");
  const [isTodoListLoading, setIsTodoListLoading] = useState(false);

  const [sortBy, setSortBy] = useState("creationDate");
  const [sortDirection, setSortDirection] = useState("desc");
  const [filterTerm, setFilterTerm] = useState("");

  const [dataVersion, setDataVersion] = useState(0);

  const debouncedFilterTerm = useDebounce(filterTerm, 300);

  const invalidateCache = useCallback(() => {
    console.log("Invalidating memo cache after todo mutation");

    setDataVersion((prev) => prev + 1);
  }, []);

  const handleFilterChange = (newTerm) => {
    setFilterTerm(newTerm);
  };
  const fetchTodos = useCallback(async () => {
    setIsTodoListLoading(true);

    try {
      const paramsObject = {
        sortBy,
        sortDirection,
      };

      if (debouncedFilterTerm) {
        paramsObject.find = debouncedFilterTerm;
      }

      const params = new URLSearchParams(paramsObject);

      const response = await fetch(`/api/tasks?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await response.json();

      setTodoList(data.tasks || data);
      setError("");
      setFilterError("");
    } catch (error) {
      if (
        debouncedFilterTerm ||
        sortBy !== "creationDate" ||
        sortDirection !== "desc"
      ) {
        setFilterError(error.message);
      } else {
        setError(error.message);
      }
    } finally {
      setIsTodoListLoading(false);
    }
  }, [sortBy, sortDirection, debouncedFilterTerm]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

    setTodoList((previous) => [newTodo, ...previous]);

    invalidateCache();
  }

  function completeTodo(id) {
    setTodoList((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo,
      ),
    );

    invalidateCache();
  }

  return (
    <>
      <h1>My Todos</h1>

      <SortBy
        sortBy={sortBy}
        sortDirection={sortDirection}
        filterTerm={filterTerm}
        onSortByChange={setSortBy}
        onSortDirectionChange={setSortDirection}
        onFilterChange={handleFilterChange}
      />

      <TodoForm onAddTodo={addTodo} />

      {error && <p>{error}</p>}
      {filterError && <p>{filterError}</p>}
      {isTodoListLoading && <p>Loading...</p>}

      <TodoList
        todoList={todoList}
        dataVersion={dataVersion}
        onCompleteTodo={completeTodo}
      />
    </>
  );
}
