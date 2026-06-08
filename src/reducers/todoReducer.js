export const TODO_ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  ADD_TODO_START: "ADD_TODO_START",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR: "ADD_TODO_ERROR",
  COMPLETE_TODO_START: "COMPLETE_TODO_START",
  COMPLETE_TODO_SUCCESS: "COMPLETE_TODO_SUCCESS",
  COMPLETE_TODO_ERROR: "COMPLETE_TODO_ERROR",
  UPDATE_TODO_START: "UPDATE_TODO_START",
  UPDATE_TODO_SUCCESS: "UPDATE_TODO_SUCCESS",
  UPDATE_TODO_ERROR: "UPDATE_TODO_ERROR",
  SET_SORT: "SET_SORT",
  SET_FILTER: "SET_FILTER",
  CLEAR_ERROR: "CLEAR_ERROR",
  RESET_FILTERS: "RESET_FILTERS",
};

export const initialTodoState = {
  todoList: [],
  error: "",
  filterError: "",
  isTodoListLoading: true,
  sortBy: "createdDate",
  sortDirection: "asc",
  filterTerm: "",
  dataVersion: 0,
};

export function todoReducer(state, action) {
  switch (action.type) {
    case TODO_ACTIONS.FETCH_START:
      return {
        ...state,
        isTodoListLoading: true,
        error: "",
      };

    case TODO_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        isTodoListLoading: false,
      };
    case TODO_ACTIONS.ADD_TODO_SUCCESS:
      return {
        ...state,
        todoList: [action.payload, ...state.todoList],
        dataVersion: state.dataVersion + 1,
      };
    case TODO_ACTIONS.COMPLETE_TODO_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isCompleted: true } : todo,
        ),
        dataVersion: state.dataVersion + 1,
      };
    case TODO_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        error: action.payload.isFilterError
          ? state.error
          : action.payload.message,
        filterError: action.payload.isFilterError
          ? action.payload.message
          : state.filterError,
        isTodoListLoading: false,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

//       dispatch({ type: TODO_ACTIONS.FETCH_START });

//       dispatch({
//   type: TODO_ACTIONS.FETCH_SUCCESS,
//   payload: { todos },
// });

// dispatch({
//   type: TODO_ACTIONS.FETCH_ERROR,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });

// dispatch({
//   type: TODO_ACTIONS.ADD_TODO_START,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.ADD_TODO_ERROR,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.COMPLETE_TODO_START,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });
// dispatch({
//   type: TODO_ACTIONS.COMPLETE_TODO_SUCCESS,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.COMPLETE_TODO_ERROR,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.UPDATE_TODO_START,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// }););dispatch({
//   type: TODO_ACTIONS.UPDATE_TODO_SUCCESS,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.UPDATE_TODO_ERROR,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });
// dispatch({
//   type: TODO_ACTIONS.SET_SORT,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });;dispatch({
//   type: TODO_ACTIONS.SET_FILTER,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });dispatch({
//   type: TODO_ACTIONS.CLEAR_ERROR,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });;dispatch({
//   type: TODO_ACTIONS.RESET_FILTERS,
//   payload: {
//     message: `Error fetching todos: ${error.message}`,
//     isFilterError: false,
//   },
// });
// onSortByChange={(newSortBy) =>
//   dispatch({
//     type: TODO_ACTIONS.SET_SORT,
//     payload: { sortBy: newSortBy, sortDirection },
//   })
// }
