import { createContext, useState } from "react";
import { useContext } from "react";

const AuthContext = createContext();

export function Auth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const login = async (userEmail, password) => {
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: userEmail, password }),
        credentials: "include",
      };

      const res = await fetch("/api/users/logon", options);
      const data = await res.json();

      if (res.status === 200 && data.name && data.csrfToken) {
        setEmail(data.name);
        setToken(data.csrfToken);
        return { success: true };
      }

      return {
        success: false,
        error: `Authentication failed: ${data?.message}`,
      };
    } catch {
      return {
        success: false,
        error: "Network error during login",
      };
    }
  };

  const logout = async () => {
    setEmail("");
    setToken("");
    return { success: true };
  };

  const value = {
    email,
    token,
    isAuthenticated: !!token,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
