import { useEffect, useCallback, useReducer } from "react";
import TodoList from "./TodoList/TodoListItem";
import TodoForm from "./TodoForm";
import SortBy from "../shared/SortBy.jsx";
import StatusFilter from "../shared/StatusFilter";

// reducer import
import {
  todoReducer,
  initialTodoState,
  TODO_ACTIONS,
} from "../reducers/todoReducer";

// new code
export default function TodosPage() {
  // 1. reduce Inicialiciation
  const [state, dispatch] = useReducer(todoReducer, initialTodoState);

  const {
    todoList,
    error,
    filterError,
    isTodoListLoading,
    sortBy,
    sortDirection,
    filterTerm,
    dataVersion,
  } = state;

  // filterss change
  const handleFilterChange = (newTerm) => {
    dispatch({ type: TODO_ACTIONS.SET_FILTER, payload: newTerm });
  };

  const handleSortChange = (newSortBy) => {
    dispatch({
      type: TODO_ACTIONS.SET_SORT,
      payload: { sortBy: newSortBy, sortDirection },
    });
  };

  const handleDirectionChange = (newDirection) => {
    dispatch({
      type: TODO_ACTIONS.SET_SORT,
      payload: { sortBy, sortDirection: newDirection },
    });
  };

  // 3. fetch HTTP
  const fetchTodos = useCallback(async () => {
    dispatch({ type: TODO_ACTIONS.FETCH_START });

    try {
      const paramsObject = { sortBy, sortDirection };

      //  filterTerm use
      if (filterTerm) {
        paramsObject.find = filterTerm;
      }

      const params = new URLSearchParams(paramsObject);
      const response = await fetch(`/api/tasks?${params}`);

      if (!response.ok) {
        throw new Error("Failed to fetch todos");
      }

      const data = await response.json();
      console.log("Datos que vienen de la API:", data);
      const tasks = data.tasks || data;

      dispatch({ type: TODO_ACTIONS.FETCH_SUCCESS, payload: tasks });
    } catch (err) {
      // filter
      const isFilterError =
        filterTerm || sortBy !== "creationDate" || sortDirection !== "desc";

      dispatch({
        type: TODO_ACTIONS.FETCH_ERROR,
        payload: {
          message: err.message,
          isFilterError: !!isFilterError,
        },
      });
    }

    //  filterTerm  dependency useCallback
  }, [sortBy, sortDirection, filterTerm]);

  // Execucion charge or change
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, dataVersion]);

  // 4.  mutacion function
  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title,
      isCompleted: false,
    };

    dispatch({ type: TODO_ACTIONS.ADD_TODO_SUCCESS, payload: newTodo });
  }

  function Todo(id) {
    dispatch({ type: TODO_ACTIONS.COMPLETE_TODO_SUCCESS, payload: id });

    return (
      <>
        <h1>My Todos</h1>

        <SortBy
          sortBy={sortBy}
          sortDirection={sortDirection}
          filterTerm={filterTerm}
          onSortByChange={handleSortChange}
          onSortDirectionChange={handleDirectionChange}
          onFilterChange={handleFilterChange}
        />

        <TodoForm onAddTodo={addTodo} />

        {error && <p style={{ color: "red" }}>{error}</p>}
        {filterError && <p style={{ color: "orange" }}>{filterError}</p>}
        {isTodoListLoading && <p>Loading...</p>}

        <TodoList todoList={todoList} dataVersion={dataVersion} />
      </>
    );
  }
}
