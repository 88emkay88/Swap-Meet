import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Register from "../pages/Register";
import SignUp from "../pages/SignUp";


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
]

export default routes;