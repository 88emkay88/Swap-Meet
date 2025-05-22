import { Carousel } from "flowbite-react";
import React from "react";

const CarouselHero = () => {
  const heroContent = [
    {
      img: "/src/assets/images/paper-bags.jpg",
      alt: "Paper Bags with a blue background",
      heading: (
        <>
          Welcome to Swap<span className="text-sky-800">Meet</span>
        </>
      ),
      heading_class: "text-6xl font-semibold",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe impedit modi voluptatum porro, ea tempore quis molestias recusandae quia autem earum illo veniam deserunt minima obcaecati voluptatibus, aliquam velit.",
      button: "Explore",
      button_class:
        "bg-sky-200 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold",
    },
    {
      img: "/src/assets/images/paper-bags.jpg",
      alt: "Paper Bags with a blue background",
      heading: (
        <>
          Welcome to Swap<span className="text-sky-800">Meet</span>
        </>
      ),
      heading_class: "text-6xl font-semibold",
      details:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus saepe impedit modi voluptatum porro, ea tempore quis molestias recusandae quia autem earum illo veniam deserunt minima obcaecati voluptatibus, aliquam velit.",
      button: "Explore",
      button_class:
        "bg-sky-200 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold",
    },
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default CarouselHero;
