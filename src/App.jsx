import Logon from "./features/Logon";
import Header from "./shared/Header";
import { useAuth } from "./contexts/AuthContext";
import { Routes, Route } from "react-router";

import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import RequireAuth from "./components/RequireAuth";
import TodosPage from "./features/TodosPage";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <Header />
      {/* new */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route
          path="/todos"
          element={
            <RequireAuth>
              <TodosPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* new */}
      {isAuthenticated ? <TodosPage /> : <Logon />}
      <div className="app-container">
        <Routes>
          {/* route for the render */}
          <Route path="/" element={<Logon />} />

          {/* route for  page  Todos */}
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
