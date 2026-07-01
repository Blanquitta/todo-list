import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router";

export default function Navigation() {
  const { isAuthenticated } = useAuth();

  // Function
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
      color: "inherit", // keep the text color
    };
  };

  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          padding: 0,
          margin: 0,
        }}
      >
        {/* users link */}
        <li>
          <NavLink to="/about" style={navLinkStyle}>
            About
          </NavLink>
        </li>

        {/* authentication link*/}
        {isAuthenticated ? (
          <>
            <li>
              <NavLink to="/todos" style={navLinkStyle}>
                Todos
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" style={navLinkStyle}>
                Profile
              </NavLink>
            </li>
          </>
        ) : (
          // no authentication link
          <li>
            <NavLink to="/login" style={navLinkStyle}>
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}
