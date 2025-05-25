import React from "react";

const PopularCategories = () => {
  const categories = [
    {
      img: "/src/assets/images/ear-buds.png",
      heading: "Electronics",
    },
    {
      img: "/src/assets/images/accessories.png",
      heading: "Accessories",
    },
    {
      img: "/src/assets/images/blender.png",
      heading: "Home Appliances",
    },
    {
      img: "/src/assets/images/console.png",
      heading: "Gaming",
    },
    {
      img: "/src/assets/images/basketball.png",
      heading: "Sports",
    },
  ];
  return (
    <div className="text-blue-950 p-10">
      <h1 className="text-3xl font-semibold font-montserrat">
        Explore Popular Categories
          </h1>
        
          <div className="grid grid-cols-5 mt-8 w-full">
              {categories.map((cat, index) => (
                  <div
                      key={index}
                      className="hover:bg-sky-200 cursor-pointer transition duration-300 p-5 flex flex-col justify-center items-center rounded-full w-7/8 h-3/4"
                  >
                      <img className="h-4/5" src={cat.img} alt={`Image for ${cat.heading}`} />
                      <p className="text-center">{cat.heading}</p>
                  </div>
              ))}
          </div>
    </div>
  );
};

export default PopularCategories;
