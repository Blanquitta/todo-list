import { useState } from 'react';
import { useNavigate } from 'react-router';  // Add this import
import { useAuth } from '../contexts/AuthContext';

function Logoff() {
  const { logout } = useAuth();
  const navigate = useNavigate();  // Add this hook
  
  async function handleLogoff() {
    setIsLoggingOff(true);
    setError('');

    const result = await logout();

    if (result.success) {
      navigate('/login');  // Add this navigation
    } else {
      setError(result.error);
      setIsLoggingOff(false);
    }
  }
//   new
 function Logoff() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function handleLogout() {
  try {
        // de session close
        await logout();
        
        // 2. redirect the user
        navigate("/login");
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    }

    handleLogout();
  }, [logout, navigate]);
  // ... rest of component

    <div style={{ padding: "20px", textAlign: "center" }}>
      <p> closing session ...</p>
    </div>
    // new code
  )
}
}
export default Logoff;