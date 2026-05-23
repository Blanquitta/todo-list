import "./App.css";
import { useState } from "react";
import Logon from "./features/Logon";
import TodosPage from "./features/TodosPage";
import Header from "./shared/Header";

function App() {
  // Define state variables for email and token
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <div>
      {/* Always render the Header */}

      <Header />

      {/* Conditional rendering based on the token */}
      {token ? (
        <TodosPage token={token} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
    </div>
  );
}

export default App;
