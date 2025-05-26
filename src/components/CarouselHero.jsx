import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CarouselHero = ({ autoSlide = true, autoSlideInterval = 10000 }) => {
  const heroContent = [
    {
      img: "/src/assets/images/paper-bags.jpg",
      alt: "image 1",
      heading: (
        <>
          Welcome to Swap<span className="text-sky-800">Meet</span>
        </>
      ),
      heading_class: "text-6xl font-semibold",
      details:
        "Your secure, local marketplace for buying and selling everything from fashion to gadgets. No middlemen. No nonsense.",
      button: "Explore",
      button_class:
        "bg-sky-200 w-2/6 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold",
    },
    {
      img: "/src/assets/images/shopping-cart-bluebg.jpg",
      alt: "image 1",
      heading: (
        <>
          Welcome to Swap<span className="text-red-800">Meet</span>
        </>
      ),
      heading_class: "text-6xl font-semibold",
      details:
        "Where your closet turns into cash, or where you can find hidden gems from sellers near you. Whether you're a buyer or a seller — SwapMeet puts the power in your hands.",
      button: "Explore",
      button_class:
        "bg-sky-200 w-2/6 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold shadow-xl",
    },
    {
      img: "/src/assets/images/online-shopping-chart.jpg",
      alt: "image 1",
      heading: (
        <>
          Welcome to Swap<span className="text-green-800">Meet</span>
        </>
      ),
      heading_class: "text-6xl font-semibold shadow-xl",
      details:
        "With a built-in escrow, verified users, and easy payments, SwapMeet brings you a smarter way to trade peer-to-peer — securely and hassle-free.",
      button: "Explore",
      button_class:
        "bg-sky-200 w-2/6 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold shadow-xl",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  useEffect(() => {
    if (autoSlide) {
      const slideInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
      }, autoSlideInterval);

      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, autoSlideInterval, heroContent.length]);

  return (
    <div className="relative w-full lg:h-200 mx-auto">
      {/* Slider */}
      <div className="relative mx-5 md:mx-20 my-10 overflow-x-clip rounded-4xl">
        {heroContent.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <img
              src={image.img}
              alt={`Slide ${index}`}
              className="relative h-85 md:h-200 w-full rounded-4xl shadow-md hover:shadow-2xl hover:-translate-y-1 transform duration-500"
            />

            <div className="absolute top-5 md:top-70 left-2 md:left-40 md:w-1/2">
              <div className="grid">
                <h1 className="text-xl md:text-4xl font-semibold text-sky-50 md:mb-4 mb-2">
                  {image.heading}
                </h1>
                <p className="md:text-xl text-sky-950 w-2/3 md:w-2/4 mb-5">
                  {image.details}
                </p>
                <Link
                  to="/products"
                  className={`text-center w-1/6 bg-sky-200 px-8 py-2 rounded-full hover:bg-sky-100 text-blue-900 font-semibold shadow-xl cursor-pointer translate-x-[60%]`}
                >
                  {image.button}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}

      {/* Desktop */}
      <div className="hidden md:block">
        <button
          className="top-1/2 absolute cursor-pointer left-0 transform -translate-y-1/2 ml-3 bg-sky-400 text-sky-100 rounded-full p-2"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="top-1/2 absolute cursor-pointer right-0 transform -translate-y-1/2 mr-3 bg-sky-400 text-sky-100 rounded-full p-2"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Mobile */}
      <div className="md:hidden block">
        <button
          className="bottom-0 md:top-1/2 absolute cursor-pointer left-0 md:transform md:-translate-y-1/2 ml-3 bg-sky-400 text-sky-100 rounded-full p-2"
          onClick={prevSlide}
        >
          <ChevronLeft />
        </button>
        <button
          className="bottom-0 md:top-1/2 absolute cursor-pointer right-0 md:transform md:-translate-y-1/2 translate-y-0 mr-3 bg-sky-400 text-sky-100 rounded-full p-2"
          onClick={nextSlide}
        >
          <ChevronRight />
        </button>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
        {heroContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="relative cursor-pointer w-12 h-2 mx-1 bg-blue-200 rounded-full overflow-hidden"
          >
            <div
              className={`absolute left-0 top-0 h-full bg-sky-600 transition-all  ${
                index === currentIndex ? "animate-fillProgress" : ""
              }`}
              style={{
                transitionDuration: `${autoSlideInterval}ms`,
                animationTimingFunction: "linear",
                animationFillMode: "forwards",
              }}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselHero;
