import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Menu,
  ShoppingBagIcon,
  ShoppingCart,
  UserCircle,
  X,
} from "lucide-react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const ProductsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const getSellerInitials = (seller) => {
    if (!seller?.FirstName || !seller?.LastName) return "";
    return (
      seller.FirstName.charAt(0).toUpperCase() +
      seller.LastName.charAt(0).toUpperCase()
    );
  };

  const { cartItems } = useCart();

  return (
    <header className="w-screen sticky top-0 bg-white/65 backdrop-blur-2xl z-40 shadow-md py-5 md:px-20 px-2 flex justify-between items-center overflow-hidden">
      {/* Logo */}
      <div>
        <Link to={"/"} className="flex items-center space-x-2">
          <ShoppingCart size={35} />
          <p className="text-2xl font-bold">
            Swap<span className="text-sky-400">Meet</span>
          </p>
        </Link>
      </div>

      <nav className="w-75 hidden md:block">
        <ul className="flex justify-evenly">
          <Link to={"/"} className="hover:text-sky-600">
            Home
          </Link>
          <Link to="/auction" className="hover:text-sky-600">
            Auction
          </Link>
          <Link to="/best-sellers" className="hover:text-sky-600">
            Best Sellers
          </Link>
        </ul>
      </nav>

      {/* mobile menu */}
      <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
        <Menu size={30} />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* close button */}
        <div className="flex bg-white/88 backdrop-blur-3xl  justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="p-6 bg-white/88 backdrop-blur-3xl rounded-b-2xl space-y-4">
          <Link to="/" className="block text-lg">
            Home
          </Link>
          <Link to="/auction" className="block text-lg">
            Auction
          </Link>
          <Link to="/best-sellers" className="block text-lg">
            Best Seller
          </Link>
          {user ? (
            <Link to={`/${user.role}-dashboard`}>Profile</Link>
          ) : (
            <Link to="/sign-up" className="block text-lg">
              Login
            </Link>
          )}
        </ul>
      </div>

      <div className="hidden md:flex items-center space-x-5">
        {user ? (
          <>
            {user.role === "buyer" && (
              <>
                <Link to="/buyer-dashboard/cart" className="relative">
                  <div className="group absolute left-6 -top-1 bg-blue-800 py-0.2 px-2 rounded-full text-blue-50">
                    {cartItems.length}
                  </div>
                  <ShoppingBagIcon
                    size={40}
                    className="hover:bg-sky-200 hover:text-blue-800 px-2 py-1 rounded-full"
                  />
                </Link>
                <Link to="/buyer-dashboard/favorites">
                  <Heart size={27} className="hover:text-sky-600" />
                </Link>
              </>
            )}
            <Link to={`/${user.role}-dashboard`}>
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.UserName}
                  className="h-10 w-10 rounded-full border"
                />
              ) : (
                <div className=" flex items-center justify-center border w-10 h-10 rounded-full">
                  {getSellerInitials(user)}
                </div>
              )}
            </Link>
            <button
              onClick={() => logout()}
              className="bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-2xl"
            >
              Log Out
            </button>
          </>
        ) : (
          <Link to="/sign-up" title="Sign Up">
            <UserCircle />
          </Link>
        )}
      </div>
    </header>
  );
};

export default ProductsHeader;
