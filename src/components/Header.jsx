import React, { useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBagIcon,
  ShoppingCart,
} from "lucide-react";
import LowNav from "./LowNav";

const Header = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    "Electronics",
    "Clothing & Accessories",
    "Home & Kitchen",
    "Toys & Games",
    "Books & Media",
    "Antiques & Collectibles",
    "Tools & DIY",
    "Sports & Outdoors",
  ];

  return (
    <header className="grid items-center text-blue-950 z-10 xl:py-4 xl:px-10 bg-white  space-y-2 shadow-md">
      <div className="flex justify-evenly">
        {/* Logo */}
        <div>
          <a href="#" className="flex items-center space-x-2">
            <ShoppingCart size={35} />
            <p className="text-2xl font-bold">
              Swap<span className="text-sky-400">Meet</span>
            </p>
          </a>
        </div>

        <div className="hover:bg-sky-100 py-3 px-6 rounded-full">
          <button
            onClick={() => setOpen(!open)}
            className="flex space-x-1 items-center cursor-pointer"
          >
            <Menu />

            <p>Category</p>
          </button>

          {open && (
            <div className="absolute top-17 left-75 z-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black/10">
              <ul className="py-1">
                {categories.map((cat, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-blue-100"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          <form method="get">
            <label htmlFor="search" className="hidden">
              search for items
            </label>
            <div className="flex items-center group">
              <input
                className="border-2 border-r-0 w-190 h-10 rounded-l-full p-5 focus:outline-0 group focus:border-blue-400"
                type="search"
                name="search"
                placeholder="Search for items"
              />
              <div className="p-2 border-2 border-blue-400 border-l-0 rounded-r-full pr-4 group-focus-within:border-blue-400 bg-blue-400 text-blue-100">
                <Search size={24} />
              </div>
            </div>
          </form>
        </div>

        <div className="flex space-x-4 items-center">
          <a
            href="#"
            className="hover:bg-gray-200 px-2 py-1 rounded-full font-semibold"
          >
            Sign in
          </a>

          <a href="#">
            <Heart
              size={40}
              className="hover:bg-sky-200 hover:text-blue-800 px-2 py-1 rounded-full"
            />
          </a>

          <a href="#" className="relative">
            <div className="group absolute left-6 -top-1 bg-blue-800 py-0.2 px-2 rounded-full text-blue-50">
              0
            </div>
            <ShoppingBagIcon
              size={40}
              className="hover:bg-sky-200 hover:text-blue-800 px-2 py-1 rounded-full"
            />
          </a>
        </div>
      </div>

      <LowNav />
    </header>
  );
};

export default Header;
