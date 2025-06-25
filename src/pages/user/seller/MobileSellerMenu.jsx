import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const MobileSellerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <>
      {/* mobile menu */}
      <button
        className={`md:hidden ${isMenuOpen ? "hidden" : ""}`}
        onClick={() => setIsMenuOpen(true)}
      >
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
          <Link to="/seller-dashboard" className="block text-lg">
            Dashboard
          </Link>
          <Link to="/seller-dashboard/listings" className="block text-lg">
            Listings
          </Link>
          <Link to="/seller-dashboard/post-item" className="block text-lg">
            Post Items
          </Link>
          <Link to="/seller-dashboard/profile" className="block text-lg">
            Profile
          </Link>
          <Link to="/seller-dashboard/profile">Settings</Link>
          <button className="flex mt-4" onClick={logout}>Log Out</button>
        </ul>
      </div>
    </>
  );
};

export default MobileSellerMenu;
