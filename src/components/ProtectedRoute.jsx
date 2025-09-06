import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("loggedIn");

  // Si no está logueado, redirige al login
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  // Si está logueado, muestra el contenido
  return children;
};

export default ProtectedRoute;
