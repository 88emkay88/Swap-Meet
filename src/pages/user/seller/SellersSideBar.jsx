import { Link, NavLink } from "react-router-dom";
import { Home, Package, PlusCircle, User, Settings, ShoppingCart } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

const SellerSideBar = () => {
  const navLinks = [
    { to: "/seller-dashboard", icon: Home, label: "Dashboard" },
    { to: "/seller-dashboard/listings", icon: Package, label: "My Listings" },
    { to: "/seller-dashboard/post-item", icon: PlusCircle, label: "Post Item" },
    { to: "/seller-dashboard/profile", icon: User, label: "Profile" },
    { to: "/seller-dashboard/settings", icon: Settings, label: "Settings" },
  ];

  const { logout } = useAuth();

  return (
    <aside className="w-64 h-screen sticky top-0 border-r  hidden md:block">
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
      <nav className="mt-6">
        <ul className="space-y-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/seller-dashboard"}
                className={({ isActive }) =>
                  `flex items-center px-6 py-3 text-sm ${
                    isActive
                      ? "bg-swap/10 border-r-4 border-swap text-swap font-medium"
                      : "text-gray-600 hover:bg-sky-100"
                  }`
                }
              >
                <link.icon className="h-5 w-5 mr-3" />
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center w-full mt-3">
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

export default SellerSideBar;
