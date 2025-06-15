import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export default function PrivateRoutes() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user?.role) {
      alert("Please Login to access this page.");
    }
  }, [user, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  return user?.role ? <Outlet /> : <Navigate to="/" />;
}
