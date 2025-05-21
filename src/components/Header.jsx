import React from "react";
import { Menu, ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="flex py-4 px-10 bg-white h-20">
      <div>
        {/* Logo */}
        <div>
          <a href="#" className="flex items-center space-x-2">
            <ShoppingCart size={35} />
            <p className="text-2xl font-bold">
              Swap<span className="text-sky-400">Meet</span>
            </p>
          </a>
        </div>

        <div>
          <Menu />
          <p>Category</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
