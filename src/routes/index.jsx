import AdminDashboard from "../pages/admin/AdminDashboard";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Register from "../pages/Register";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";


const routes = [
    {
        path: "/", 
        element: <Home />
    },
    {
        path: "/products", 
        element: <ProductsPage />
    },
    {
        path: "/sign-up", 
        element: <SignUp />
    },
    {
        path: "/register", 
        element: <Register />
    },

    {
        path: "/profile",
        element: <PrivateRoutes />, 
        children: [{ path: "", element: <UserProfile />}],
    }, 
    {
        path: "/admin",
        element: <AdminRoutes />, 
        children: [{ path: "", element: <AdminDashboard />}],
    }, 
]

export default routes;