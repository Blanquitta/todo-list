// import { useState } from "react";
// import { useAuth } from "../contexts/AuthContext";

// function ({ onSetEmail = useAuth() => {}, onSetToken = () => {} }) {
//   // Initialize state using useState
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [authError, setAuthError] = useState("");
//   const [isLoggingOn, setIsLoggingOn] = useState(false);

//   // Define handleSubmit function inside the component
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent form default submission behavior
//     setIsLoggingOn(true);
//     setAuthError(""); // Clear any existing error message

//     try {
//       const response = await fetch("/api/users/logon", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.status === 200 && data.name && data.csrfToken) {
//         onSetEmail(data.name);
//         onSetToken(data.csrfToken);
//       } else {
//         setAuthError(`Authentication failed: ${data?.message}`);
//       }
//     } catch (error) {
//       setAuthError(`Error: ${error.name} | ${error.message}`);
//     } finally {
//       setIsLoggingOn(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {authError && <div style={{ color: "red" }}>{authError}</div>}

//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>

//       <button type="submit" disabled={isLoggingOn}>
//         {isLoggingOn ? "Logging in..." : "Log On"}
//       </button>
//     </form>
//   );
// }

// export default Logon;
import { useState } from "react";

function Logon({ onSetEmail = () => {}, onSetToken = () => {} }) {
 
  // Initialize state using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingOn, setIsLoggingOn] = useState(false);

  // handleSubmit function inside the component
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    setIsLoggingOn(true);
    setAuthError(""); 

    try {
      const response = await fetch("/api/users/logon", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.name && data.csrfToken) {
        onSetEmail(data.name);
        onSetToken(data.csrfToken);
      } else {
        
        setAuthError(
          `Authentication failed: ${data?.message || "Unknown error"}`,
        );
      }
    } catch (error) {
      setAuthError(`Error: ${error.name} | ${error.message}`);
    } finally {
      setIsLoggingOn(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {authError && <div style={{ color: "red" }}>{authError}</div>}

      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" disabled={isLoggingOn}>
        {isLoggingOn ? "Logging in..." : "Log On"}
      </button>
    </form>
  );
}

export default Logon;
