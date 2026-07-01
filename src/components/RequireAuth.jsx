import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

function RequireAuth({ children }) {
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login", {
        replace: true,
        state: {
          from: location,
        },
      });
    }
  }, [token, location, navigate]);

  if (!token) {
    return <p>Redirecting to login...</p>;
  }

  return children;
}

export default RequireAuth;
