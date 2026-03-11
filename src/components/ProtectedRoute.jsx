import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const isAdmin = localStorage.getItem("adminAuth");

  if (!isAdmin) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;