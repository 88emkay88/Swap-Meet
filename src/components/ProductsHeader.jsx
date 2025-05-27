import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, UserCircle } from "lucide-react";

const ProductsHeader = () => {
  return (
    <header className="w-screen bg-white z-40 shadow-md py-5 px-20 flex justify-between items-center sticky top-0">
      {/* Logo */}
      <div>
        <Link to={"/"} className="flex items-center space-x-2">
          <ShoppingCart size={35} />
          <p className="text-2xl font-bold">
            Swap<span className="text-sky-400">Meet</span>
          </p>
        </Link>
      </div>

      <nav className="w-75">
        <ul className="flex justify-evenly">
          <Link to={"/"} className="hover:text-sky-600">
            Home
          </Link>
          <Link className="hover:text-sky-600">Auction</Link>
          <Link className="hover:text-sky-600">Best Sellers</Link>
        </ul>
      </nav>

      <Link>
        <UserCircle size={30} className="hover:text-sky-600" />
      </Link>
    </header>
  );
};

export default ProductsHeader;
