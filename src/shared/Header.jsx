import React from "react";
import TodoList from "../features/TodoList/TodoListItem";
import { useAuth } from "../contexts/AuthContext";
import Navigation from "./Navigation";

// Define the Header component
// function Header() {
//   const { TodoList } = TodoList;
//   return (
//     <header>
//       <h1>Todo List</h1>
//     </header>
//   );
// }

// // Export the component as a default export
// export default Header;

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e9ecef",
      }}
    >
      {/* 1. Título de la aplicación */}
      <h1 style={{ margin: 0, fontSize: "1.5rem" }}>TodoApp</h1>

      {/* 2. navegation component */}
      <Navigation />

      {/* 3. logout botton*/}
      <div>
        {isAuthenticated ? (
          <button
            onClick={logout}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        ) : (
          <span style={{ color: "#6c757d", fontSize: "0.9rem" }}>Invitado</span>
        )}
      </div>
    </header>
  );
}
