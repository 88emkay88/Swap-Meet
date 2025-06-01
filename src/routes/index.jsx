import ProductDetails from "../pages/Products/ProductDetails";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Electronics from "../pages/Products/Categories/Electronics";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Register from "../pages/Register";
import SignUp from "../pages/SignUp";
import UserProfile from "../pages/UserProfile";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Accessories from "../pages/Products/Categories/Accessories";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/electornics",
    element: <Electronics />,
  },
  {
    path: "/accessories" ,
    element: <Accessories />
  },
  {
    path: "/:category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/profile",
    element: <PrivateRoutes />,
    children: [{ path: "", element: <UserProfile /> }],
  },
  {
    path: "/admin",
    element: <AdminRoutes />,
    children: [{ path: "", element: <AdminDashboard /> }],
  },
];

export default routes;
