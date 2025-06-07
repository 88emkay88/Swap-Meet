import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function AdminRoutes() {
  const { user } = useAuth();
  console.log("PrivateRoute user: ", user);

  return user?.role === "admin" ? <Outlet /> : <Navigate to="/admin" />;
}
