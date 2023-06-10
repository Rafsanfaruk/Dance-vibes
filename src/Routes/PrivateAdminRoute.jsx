import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500"></div>
      </div>
    );
  }

  if (user && user.role === "admin") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateAdminRoute;
