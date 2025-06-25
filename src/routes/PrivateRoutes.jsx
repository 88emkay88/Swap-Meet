import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    <div>Loading...</div>;
  }

  if (!user || !user.role) {
    return <Navigate to="/sign-up" replace />;
  }

  return <Outlet />;
}
