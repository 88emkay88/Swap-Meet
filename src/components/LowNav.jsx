import React from "react";
import { Link } from "react-router-dom";

const LowNav = () => {
  const lowNav = [
    {
      name: "New",
      link: "/new",
    },
    {
      name: "Trending",
      link: "/trending",
    },
    {
      name: "Auction",
      link: "/auction",
    },
    {
      name: "Best Sellers",
      link: "/best-sellers",
    },

  ];
  return (
    <div className="hidden md:flex justify-center translate-x-15 space-x-3.5">
      <ul className="flex">
        {lowNav.map((opt, index) => (
          <button>
            <Link
              to={opt.link}
              key={`${index}`}
              className="hover:bg-sky-400 py-1 px-4 rounded-full"
            >
              {opt.name}
            </Link>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default LowNav;
