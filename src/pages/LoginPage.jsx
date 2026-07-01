import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

// function LoginPage() {
//   const { login, isAuthenticated } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
  
//   // Get intended destination from location state, default to /todos
//   const from = location.state?.from?.pathname || '/todos';

//   // Redirect if already authenticated
//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate(from, { replace: true });
//     }
//   }, [isAuthenticated, navigate, from]);

//   // Handle login form submission
//   async function handleSubmit(e) {
//     e.preventDefault();
//     // ... existing login logic
//     const result = await login(email, password);
//     if (result.success) {
//       // useEffect will handle redirect
//     }
//   }
  
//   // ... rest of component with form JSX
// }
// import { useState } from "react";




export default function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    const result = await login(emailInput, passwordInput);

    if (result.success) {
      navigate(from, { replace: true });
    } else {
      setError(result.error);
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}