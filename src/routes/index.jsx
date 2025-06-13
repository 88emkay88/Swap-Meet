import ProductDetails from "../pages/Products/ProductDetails";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Electronics from "../pages/Products/Categories/Electronics";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import Register from "../pages/Auth/Register";
import SignUp from "../pages/Auth/SignUp";
import BuyerDashBoard from "../pages/user/buyer/BuyerDashBoard";
import AdminRoutes from "./AdminRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Accessories from "../pages/Products/Categories/Accessories";
import HomeAppliances from "../pages/Products/Categories/HomeAppliances";
import Gaming from "../pages/Products/Categories/Gaming";
import Sports from "../pages/Products/Categories/Sports";
import NewProducts from "../pages/NewProducts";
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
import Favorites from "../pages/user/buyer/Favorites";
import BuyerProfile from "../pages/user/buyer/BuyerProfile";
import Settings from "../pages/user/buyer/Settings";
import SellerDashboard from "../pages/user/seller/SellerDashBoard";
import Listings from "../pages/user/seller/Listings";
import PostItem from "../pages/user/seller/PostItem"
import SellerProfile from "../pages/user/seller/SellerProfile";
import SellerSettings from "../pages/user/seller/SellerSettings";
import Users from "../pages/admin/Users";
import AdminAnalytics from "../pages/admin/AdminAnalytics";
import AdminPayments from "../pages/admin/AdminPayments"
import AdminReports from "../pages/admin/AdminReports";
import AdminSecurity from "../pages/admin/AdminSecurity"
import AdminSettings from "../pages/admin/AdminSettings";

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
    path: "/buyer-dashboard",
    element: <PrivateRoutes />,
    children: [
      { path: "", element: <BuyerDashBoard /> },
      {
        path: "/buyer-dashboard/favorites",
        element: <Favorites />,
      },
      {
        path: "/buyer-dashboard/profile",
        element: <BuyerProfile />,
      },
      {
        path: "/buyer-dashboard/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/seller-dashboard",
    element: <PrivateRoutes />,
    children: [
      { path: "", element: <SellerDashboard /> },
      {
        path: "/seller-dashboard/listings",
        element: <Listings />,
      },
      {
        path: "/seller-dashboard/post-item",
        element: <PostItem />,
      },
      {
        path: "/seller-dashboard/profile",
        element: <SellerProfile />,
      },
      {
        path: "/seller-dashboard/settings",
        element: <SellerSettings />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoutes />,
    children: [
      { path: "", element: <AdminDashboard /> },
      { path: "/admin/users", element: <Users /> },
      { path: "/admin/analytics", element: <AdminAnalytics /> },
      { path: "/admin/payments", element: <AdminPayments /> },
      { path: "/admin/reports", element: <AdminReports /> },
      { path: "/admin/security", element: <AdminSecurity /> },
      { path: "/admin/settings", element: <AdminSettings /> },
    ],
  },
];

export default routes;
