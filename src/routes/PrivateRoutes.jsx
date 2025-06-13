import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoutes() {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  console.log("PrivateRoute user: ", user);

  return user?.role ? <Outlet /> : <Navigate to="/" />;
}
