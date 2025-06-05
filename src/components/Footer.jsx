import React from "react";
import { ShoppingCart } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid mx-10 mt-19 p-10 border-t-1 border-gray-300">
      {/* Upper Nav */}
      <div className="grid lg:grid-cols-5 lg:space-y-0 space-y-3">
        {/* Logo */}
        <div>
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart size={25} />
              <p className="md:text-2xl font-bold">
                Swap<span className="text-sky-400">Meet</span>
              </p>
            </Link>
          </div>
        </div>

        {/* Buyer */}
        <div>
          <h3 className="text-xl md:mb-5 font-semibold">Buy</h3>
          <ul className="grid">
            <Link
              to="/register"
              className="hover:underline text-md cursor-pointer"
            >
              Registration
            </Link>
            <Link
              to="/auction"
              className="hover:underline text-md cursor-pointer"
            >
              Auction
            </Link>
            <Link
              to={"/products"}
              className="hover:underline text-md cursor-pointer">
              Products
            </Link>
          </ul>
        </div>

        {/* Seller */}
        <div>
          <h3 className="text-xl md:mb-5 font-semibold">Sell</h3>
          <ul>
            <li className="hover:underline text-md cursor-pointer">
              Start selling
            </li>
            <li className="hover:underline text-md cursor-pointer">
              How to sell
            </li>
            <li className="hover:underline text-md cursor-pointer">
              Whole sellers
            </li>
            <li className="hover:underline text-md cursor-pointer">
              Affiliates
            </li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-xl md:mb-5 font-semibold">Help</h3>
          <ul>
            <li className="hover:underline text-md cursor-pointer">
              Seller Center
            </li>
            <li className="hover:underline text-md cursor-pointer">
              Contact Us
            </li>
            <li className="hover:underline text-md cursor-pointer">Returns</li>
            <li className="hover:underline text-md cursor-pointer">Escrow</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl md:mb-5 font-semibold">Stay Connected</h3>
          <ul>
            <li className="flex gap-1 items-center">
              <a className="hover:underline text-md" href="#">
                Instagram
              </a>
              <AiFillInstagram />
            </li>
            <li className="flex gap-2 items-center">
              <a className="hover:underline text-md" href="#">
                Facebook
              </a>
              <FaFacebook />
            </li>
            <li className="flex gap-2 items-center">
              <a className="hover:underline text-md" href="#">
                X (Twitter)
              </a>
              <FaSquareXTwitter />
            </li>
          </ul>
        </div>
      </div>

      {/* Lower Nav */}
      <div className="text-center mt-8 cursor-default">
        SwapMeet &copy; 2025 | All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
