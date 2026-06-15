import React from "react";
import TodoList from "../features/TodoList/TodoListItem";

// Define the Header component
function Header() {
  const { TodoList } = TodoList;
  return (
    <header>
      <h1>Todo List</h1>
    </header>
  );
}

// Export the component as a default export
export default Header;
