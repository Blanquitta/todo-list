import { useState } from "react";
//   async function handleSubmit(event) {
//     event.preventDefault();

//     function Logon({
//   onSetEmail,
//   onSetToken,
// })

//     setIsLoggingOn(true);
//     setAuthError('');

// })

//     try {
//       const response = await fetch('/api/users/logon', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include',
//         body: JSON.stringify({
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || 'Failed to log on');
//       }

//       if (response.status === 200 && data.name && data.csrfToken) {
//         onSetEmail(data.name);
//         onSetToken(data.csrfToken);
//       }
//     } catch (error) {
//       setAuthError(error.message || 'Something went wrong');
//     } finally {
//       setIsLoggingOn(false);
//     }
//   }

//   return (
//     <div className="root">
//       <h1 className="heading">Log On</h1>

//       <form className="content" onSubmit={handleSubmit}>
//         <label htmlFor="email">Email</label>
//         <input
//           id="email"
//           type="email"
//           value={email}
//           onChange={(event) => setEmail(event.target.value)}
//           required
//         />

//         <label htmlFor="password">Password</label>
//         <input
//           id="password"
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />

//         {authError && <p>{authError}</p>}

//         <button type="submit" disabled={isLoggingOn}>
//           {isLoggingOn ? 'Logging on...' : 'Log On'}
//         </button>
//       </form>
//     </div>
//   );
// }

function Logon({ onSetEmail = () => {}, onSetToken = () => {} }) {
  // Initialize state using useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoggingOn, setIsLoggingOn] = useState(false);

  // Define handleSubmit function inside the component
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form default submission behavior
    setIsLoggingOn(true);
    setAuthError(""); // Clear any existing error message

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
        setAuthError(`Authentication failed: ${data?.message}`);
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
