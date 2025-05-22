import React from "react";

const LowNav = () => {
  const lowNav = [
    "New",
    "Trending",
    "Auction",
    "Gifts",
    "Top Sellers",
    "Limited Additon",
  ];
  return (
    <div className="flex justify-center translate-x-15 space-x-3.5">
      <ul className="flex ">
        {lowNav.map((opt, index) => (
          <button>
            <li
              key={index}
              className="hover:bg-gray-100 py-1 px-4 rounded-full"
            >
              {opt}
            </li>
          </button>
        ))}
      </ul>
    </div>
  );
};

export default LowNav;
