import React from "react";
import { Link } from "react-router-dom";

// Import images
import Earbuds from "../assets/images/ear-buds.png";
import Accessories from "../assets/images/accessories.png";
import Blender from "../assets/images/blender.png";
import Console from "../assets/images/console.png";
import Basketball from "../assets/images/basketball.png";

const PopularCategories = () => {
  const categories = [
    {
      img: Earbuds,
      heading: "Electronics",
      link: "/electornics",
    },
    {
      img: Accessories,
      heading: "Accessories",
      link: "/accessories",
    },
    {
      img: Blender,
      heading: "Home Appliances",
      link: "/home-appliances",
    },
    {
      img: Console,
      heading: "Gaming",
      link: "/gaming",
    },
    {
      img: Basketball,
      heading: "Sports",
      link: "/sports",
    },
  ];
  return (
    <div className="text-blue-950 p-10">
      <h1 className="text-xl md:text-3xl font-semibold font-montserrat">
        Explore Popular Categories
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-5 mt-8 w-full">
        {categories.map((cat, index) => (
          <Link
            to={cat.link}
            key={index}
            className="hover:bg-sky-200 transition duration-300 p-5 flex flex-col justify-center items-center rounded-full w-7/8 h-3/4"
          >
            <img
              className="h-4/5"
              src={cat.img}
              alt={`Image for ${cat.heading}`}
            />
            <p className="text-center">{cat.heading}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
