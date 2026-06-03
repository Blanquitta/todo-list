export const TODO_ACTIONS = {
  // Fetch operations
 
  

  FETCH_START: "FETCH_START"
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
 
  // Add todo operations
  ADD_TODO_START: "ADD_TODO_START",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_ERROR: "ADD_TODO_ERROR",
  // ... continue for all operations

  COMPLETE_TODO_START: "COMPLETE_TODO_START"
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
    // We'll add cases here
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

    case TODO_ACTIONS.FETCH_START:
      return {
        ...state,
        isTodoListLoading: true,
        error: "",
        filterError: "",
      };


        case TODO_ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
        isTodoListLoading: false,
      };

    case TODO_ACTIONS.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isTodoListLoading: false,
      };

      case "COMPLETE_TODO_START",
         return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };
            
       case  "COMPLETE_TODO_START"
         return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };
          case  "COMPLETE_TODO_SUCCESS", 
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };
      case  "UPDATE_TODO_START",
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
            }
         case  "UPDATE_TODO_SUCCESS",
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      
      };
       case  "UPDATE_TODO_ERROR",
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };

      case  "SET_SORT", 
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };
      case  "SET_FILTER", 
            return {
            ...state,
        filterTerm: action.payload,
      };
       case  "CLEAR_ERROR", 
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };
       case  "RESET_FILTERS", 
            return {
            ...state,
        error: action.payload,
        isTodoListLoading: false,
      };

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

dispatch({
  type: TODO_ACTIONS.ADD_TODO_START,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
});dispatch({
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
);dispatch({
  type: TODO_ACTIONS.COMPLETE_TODO_SUCCESS,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
}););dispatch({
  type: TODO_ACTIONS.COMPLETE_TODO_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
}););dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_START,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
}););dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_SUCCESS,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
  },
}););dispatch({
  type: TODO_ACTIONS.UPDATE_TODO_ERROR,
  payload: {
    message: `Error fetching todos: ${error.message}`,
    isFilterError: false,
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
