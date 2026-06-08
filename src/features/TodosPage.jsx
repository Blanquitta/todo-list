import { useState, useEffect, useCallback } from "react";
import TodoList from "./TodoList/TodoListItem";
import TodoForm from "./TodoForm";
import SortBy from "../shared/SortBy.jsx";
import useDebounce from "./useDebounce.js";
export function todoReducer(state, action) {
//   console.log('Dispatched action:', action.type, action.payload); // Remove 
//   switch (action.type) {
//     // ... your cases
//   }
// }
import {
  todoReducer,
  initialTodoState,
  TODO_ACTIONS,
} from '../../reducers/todoReducer'
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
export function todoReducer(state, action) {
  switch (action.type) {
    // We'll add cases here
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}


// export default function TodosPage() {
//   const [todoList, setTodoList] = useState([]);
//   const [error, setError] = useState("");
//   const [filterError, setFilterError] = useState("");
//   const [isTodoListLoading, setIsTodoListLoading] = useState(false);

//   const [sortBy, setSortBy] = useState("creationDate");
//   const [sortDirection, setSortDirection] = useState("desc");
//   const [filterTerm, setFilterTerm] = useState("");

//   const [dataVersion, setDataVersion] = useState(0);

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
        onSortByChange={(newSortBy) =>
  dispatch({
    type: TODO_ACTIONS.SET_SORT,
    payload: { sortBy: newSortBy, sortDirection },
  })
}
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

      dispatch({ type: TODO_ACTIONS.FETCH_START });

      dispatch({
  type: TODO_ACTIONS.FETCH_SUCCESS,
  payload: { todos },
});

dispatch({
  type: TODO_ACTIONS.FETCH_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});
 export function todoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.FETCH_START:
      return {...};

    default:
      return state;
  }
}
dispatch({
  type: TODO_ACTIONS.FETCH_START,
});
dispatch({
  type: TODO_ACTIONS.ADD_TODO_START,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});
dispatch({
  type: TODO_ACTIONS.ADD_TODO_SUCCESS,
  payload: newTodo,
});
dispatch({
  type: TODO_ACTIONS.ADD_TODO_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});dispatch({
  type: TODO_ACTIONS.COMPLETE_TODO_START,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});

dispatch({
  type: TODO_ACTIONS.FETCH_SUCCESS,
  payload: data.tasks || data,
});
dispatch({
  type: TODO_ACTIONS.COMPLETE_TODO_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_START,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_SUCCESS,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});
dispatch({
  type: TODO_ACTIONS.COMPLETE_TODO_SUCCESS,
  payload: id,
});
dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});
dispatch({
  type: TODO_ACTIONS.FETCH_ERROR,
  payload: {
    message: error.message,
    isFilterError:
      debouncedFilterTerm ||
      sortBy !== "creationDate" ||
      sortDirection !== "desc",
  },
});
dispatch({
  type: TODO_ACTIONS.SET_SORT,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});;dispatch({
  type: TODO_ACTIONS.SET_FILTER,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});dispatch({
  type: TODO_ACTIONS.CLEAR_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});;dispatch({
  type: TODO_ACTIONS.RESET_FILTERS,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});
onSortByChange={(newSortBy) =>
  dispatch({
    type: TODO_ACTIONS.SET_SORT,
    payload: { sortBy: newSortBy, sortDirection },
  })
}
