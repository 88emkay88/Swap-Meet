import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Menu, ShoppingCart, UserCircle, X } from "lucide-react";

const ProductsHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen bg-white z-40 shadow-md py-5 md:px-20 px-2 flex justify-between items-center">
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
          <Link className="hover:text-sky-600">Auction</Link>
          <Link className="hover:text-sky-600">Best Sellers</Link>
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
        <div className="flex justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <ul className="px-6 space-y-4">
          <Link to="/" className="block text-lg">Home</Link>
          <Link className="block text-lg">Auction</Link>
          <Link className="block text-lg">Best Sellers</Link>
          <Link to="/sign-up" className="block text-lg">Login</Link>
        </ul>
      </div>

      <div className="hidden md:flex items-center space-x-5">
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
