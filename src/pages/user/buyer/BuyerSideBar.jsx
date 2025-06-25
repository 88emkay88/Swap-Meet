import { Link, NavLink } from "react-router-dom";
import {
  Home,
  Heart,
  User,
  Settings,
  ShoppingCart,
  ShoppingBagIcon,
  Truck
} from "lucide-react";

import { useAuth } from "../../../context/AuthContext";

const BuyerSideBar = () => {
  const navLinks = [
    { to: "/buyer-dashboard", icon: Home, label: "Dashboard" },
    { to: "/buyer-dashboard/favorites", icon: Heart, label: "Favorites" },
    { to: "/buyer-dashboard/cart", icon: ShoppingBagIcon, label: "Cart" },
    { to: "/buyer-dashboard/orders", icon: Truck, label: "Orders" },
    { to: "/buyer-dashboard/profile", icon: User, label: "Profile" },
    { to: "/buyer-dashboard/settings", icon: Settings, label: "Settings" },
  ];

  const { logout } = useAuth();

  return (
    <aside className="h-full border-r hidden md:block">
      {/* Logo */}
      <div className="flex items-center justify-center">
        <div className="p-2 flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingCart size={25} />
            <p className="md:text-2xl font-bold">
              Swap<span className="text-sky-400">Meet</span>
            </p>
          </Link>
        </div>
      </div>

      <nav className="">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/buyer-dashboard"}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-sm ${
                    isActive
                      ? "bg-blue-100 border-r-4 border-blue-500 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-blue-50"
                  }`
                }
              >
                <link.icon className="h-5 w-5 mr-3" />
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="px-6 mt-8">
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 mb-3">Want to sell items?</p>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded text-sm"
              onClick={() => (window.location.href = "/register")}
            >
              Become a Seller
            </button>
          </div>
        </div>

        <div className="flex h-full justify-center items-end w-full mt-3">
          <button
            className="px-6 py-2 rounded-full bg-blue-400 hover:bg-blue-500"
            onClick={() => logout()}
          >
            log out
          </button>
        </div>
      </nav>
    </aside>
  );
};

export default BuyerSideBar;
