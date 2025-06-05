import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, ShoppingBagIcon, ShoppingCart, UserCircle, X } from "lucide-react";

const ProductsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen sticky top-0 bg-white/65 backdrop-blur-2xl z-40 shadow-md py-5 md:px-20 px-2 flex justify-between items-center">
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
          <Link to="/auction" className="hover:text-sky-600">Auction</Link>
          <Link to="/best-sellers" className="hover:text-sky-600">Best Sellers</Link>
        </ul>
      </nav>

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
          <Link to="/auction" className="block text-lg">Auction</Link>
          <Link to="/best-sellers" className="block text-lg">Best Seller</Link>
          <Link to="/sign-up" className="block text-lg">
            Login
          </Link>
        </ul>
      </div>

      <div className="hidden md:flex items-center space-x-5">
        <a href="#" className="relative">
          <div className="group absolute left-6 -top-1 bg-blue-800 py-0.2 px-2 rounded-full text-blue-50">
            0
          </div>
          <ShoppingBagIcon
            size={40}
            className="hover:bg-sky-200 hover:text-blue-800 px-2 py-1 rounded-full"
          />
        </a>

        <Link>
          <Heart size={27} className="hover:text-sky-600" />
        </Link>

        <Link>
          <UserCircle size={30} className="hover:text-sky-600" />
        </Link>
      </div>
    </header>
  );
};

export default ProductsHeader;
