import Logon from "./features/Logon";
import TodosPage from "./features/TodosPage";
import Header from "./shared/Header";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isAuthenticated } = useAuth();
  

  return (
    <div>
      <Header />

      {isAuthenticated ? <TodosPage /> : <Logon />}
    </div>
  );
}

export default App;
