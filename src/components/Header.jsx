import React, { useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBagIcon,
  ShoppingCart,
} from "lucide-react";
import LowNav from "./LowNav";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    {
      name: "Electronics",
      link: "/electornics",
    },
    {
      name: "Clothing & Accessories",
      link: "",
    },
    {
      name: "Home & Kitchen",
      link: "",
    },
    {
      name: "Toys & Games",
      link: "",
    },
    {
      name: "Books & Media",
      link: "",
    },
    {
      name: "Antiques & Collectibles",
      link: "",
    },
    {
      name: "Tools & DIY",
      link: "",
    },
    {
      name: "Sports & Outdoors",
      link: "",
    },
  ];

  return (
    <>
      {/*Desktop header */}
      <header className="hidden sticky top-0 lg:grid items-center bg-white/40 z-10 py-2 px-5 xl:py-4 xl:px-10 backdrop-blur-lg space-y-2 shadow-md">
        <div className="flex justify-evenly">
          {/* Logo */}
          <div>
            <Link to={"/"} className="flex items-center space-x-2">
              <ShoppingCart size={35} />
              <p className="text-2xl font-bold">
                Swap<span className="text-sky-400">Meet</span>
              </p>
            </Link>
          </div>

          <div className="hover:bg-sky-400 py-3 px-6 rounded-full">
            {/* Category button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex space-x-1 items-center cursor-pointer"
            >
              <Menu />

              <p>Category</p>
            </button>

            {open && (
              <div className="absolute top-17 left-95 z-10 mt-2 w-60 rounded-md shadow-lg backdrop-blur-3xl bg-white/70 ring-1 ring-black/10">
                <ul className="py-1">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <Link
                        to={cat.link}
                        className="block px-4 py-2 text-sm hover:bg-blue-300"
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search */}
          <div>
            <form method="get">
              <label htmlFor="search" className="hidden">
                search for items
              </label>
              <div className="flex items-center group">
                <input
                  className="border-2 border-r-0 lg:w-120 xl:w-190 h-10 rounded-l-full p-5 focus:outline-0 group focus:border-blue-400"
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
            <Link
              to="/sign-up"
              className="hover:bg-sky-400 px-2 py-1 rounded-full font-semibold"
            >
              Sign in
            </Link>

            <a href="#">
              <Heart
                size={40}
                className="hover:bg-sky-400 hover:text-blue-800 px-2 py-1 rounded-full"
              />
            </a>

            <a href="#" className="relative">
              <div className="group absolute left-6 -top-1 bg-blue-800 py-0.2 px-2 rounded-full text-blue-50">
                0
              </div>
              <ShoppingBagIcon
                size={40}
                className="hover:bg-sky-400 hover:text-blue-800 px-2 py-1 rounded-full"
              />
            </a>
          </div>
        </div>

        <LowNav />
      </header>

      {/* Mobile */}
      <header className="lg:hidden grid items-center z-10 py-2 px-5 space-y-3 bg-white  shadow-md">
        {/* top header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#" className="flex items-center space-x-2">
              <ShoppingCart size={25} />
              <p className="font-bold">
                Swap<span className="text-sky-400">Meet</span>
              </p>
            </a>
          </div>

          {/* button group */}
          <div className="flex items-center">
            <Link
              to="/sign-up"
              className="hover:bg-gray-200 px-2 py-1 rounded-full font-semibold"
            >
              Sign in
            </Link>

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

        {/* low header */}
        <div className="flex justify-evenly
         w-full items-center">
          {/* Category */}
          <div className="hover:bg-sky-100 py-3 px-6 rounded-full">
            {/* Category button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex space-x-1 items-center cursor-pointer"
            >
              <Menu />
            </button>

            {open && (
              <div className="absolute top-25 left-1 z-10 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black/10">
                <ul className="py-1">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm hover:bg-blue-100"
                      >
                        {cat.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex-grow w-full max-w-[600px]">
            <form method="get" className="w-full">
              <label htmlFor="search" className="hidden">
                search for items
              </label>
              <div className="flex items-center group">
                <input
                  className="border-2 border-r-0  h-10 w-full rounded-l-full p-5 focus:outline-0 group focus:border-blue-400"
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
        </div>
      </header>
    </>
  );
};

export default Header;
