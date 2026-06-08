import React from "react";

// Define the Header component
function Header() {
  const { isAuthenticated } = useAuth();
  return (
    <header>
      <h1>Todo List</h1>
    </header>
  );
}

// Export the component as a default export
export default Header;
