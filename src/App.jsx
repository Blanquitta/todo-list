import "./App.css";

//
import { useState } from "react";
import Logon from "./features/Logon";
import TodosPage from "./features/TodosPage";
import Header from "./shared/Header";

function App() {
  //  email and token store\age
  const { isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <div>
      <Header />

      {token ? (
        <TodosPage token={token} email={email} />
      ) : (
        <Logon onSetEmail={setEmail} onSetToken={setToken} />
      )}
    </div>
  );
}

export default App;
