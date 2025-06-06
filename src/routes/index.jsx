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
import HomeAppliances from "../pages/Products/Categories/HomeAppliances";
import Gaming from "../pages/Products/Categories/Gaming";
import Sports from "../pages/Products/Categories/Sports";
import NewProducts from "../pages/newProducts";
import Trending from "../pages/Trending";
import Auction from "../pages/Auction";
import AuctionDetails from "../pages/Auction/AuctionDetails";
import BestSellerDetails from "../pages/BestSeller/BestSellerDetails";
import BestSellers from "../pages/BestSellers";
import StartSelling from "../pages/StartSelling";
import HowToSell from "../pages/HowToSell";
import HelpCenter from "../pages/HelpCenter";
import ContactUs from "../pages/ContactUs";
import Returns from "../pages/Returns";
import Escrow from "../pages/Escrow";

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
    path: "/accessories",
    element: <Accessories />,
  },
  {
    path: "/home-appliances",
    element: <HomeAppliances />,
  },
  {
    path: "/gaming",
    element: <Gaming />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/:category/:id",
    element: <ProductDetails />,
  },
  {
    path: "/new",
    element: <NewProducts />,
  },
  {
    path: "/trending",
    element: <Trending />,
  },
  {
    path: "/auction",
    element: <Auction />,
  },
  {
    path: "/returns",
    element: <Returns />,
  },
  {
    path: "/escrow",
    element: <Escrow />,
  },
  {
    path: "start-selling",
    element: <StartSelling />,
  },
  {
    path: "how-to-sell",
    element: <HowToSell />,
  },
  {
    path: "/help-center",
    element: <HelpCenter />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    path: "/best-sellers",
    element: <BestSellers />,
  },
  {
    path: "/best-sellers/:id",
    element: <BestSellerDetails />,
  },
  {
    path: "/auction/:id",
    element: <AuctionDetails />,
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
