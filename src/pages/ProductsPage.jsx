// src/pages/ProductPage.jsx
import React, { useState } from "react";
import ProductsHeader from "./Products/ProductsHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { Range } from "react-range";
import { Star } from "lucide-react";
import ProductCard from "./Products/ProductCard";
import locationOptions from "../Data/locations";
import products from "../Data/products";

const checkbox = [
  "Electronics",
  "Clothing",
  "Accessories",
  "Home",
  "Kitchen",
  "Toys",
  "Games",
  "Books",
  "Media",
  "Antiques",
  "Collectibles",
  "Tools",
  "DIY",
  "Sports",
  "Outdoors",
];

const colorOption = ["Red", "Blue", "Black", "White", "Green", "Yellow"];

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [values, setValues] = useState([100, 1500]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);

 
  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      product.price >= values[0] &&
      product.price <= values[1] &&
      (!rating || product.rating === rating) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(product.location))
    );
  });

  const resetFilters = () => {
    setValues([values[0], values[1]]);
    setRating(0);
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedLocations([]);
  };

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div>
      <ProductsHeader />

      {/* Background picture */}
      <div className=" md:h-150 relative">
        <img
          src="/src/assets/images/blue-bg.jpg"
          alt="shopping cart with cereals"
          className="h-full w-full rounded-b-4xl"
        />

        <h1 className="absolute top-[58%] left-[20%] text-5xl md:top-[30%] md:left-[18%] cursor-default text-white font-bold md:text-12xl">
          Products
        </h1>
      </div>

      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar Filters */}
        <aside className="hidden md:block md:col-span-1 space-y-6">
          {/* Popular Categories */}
          <div className="bg-white p-4 w-1/2 ring-1 ring-black/10 shadow-lg">
            <h1 className="font-semibold text-lg mb-2">Popular Categories</h1>
            <div>
              {checkbox.map((name, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 mb-1 text-sm"
                >
                  <input
                    type="checkbox"
                    name={name}
                    id={name}
                    checked={selectedCategories.includes(name)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedCategories((prev) =>
                        prev.includes(value)
                          ? prev.filter((c) => c !== value)
                          : [...prev, value]
                      );
                    }}
                    value={name}
                  />
                  <label htmlFor={name}>{name}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Filter by price */}
          <div className="bg-white p-4 w-1/2 ring-1 ring-black/10 shadow-lg">
            <h1 className="font-semibold text-lg mb-2">Filter by price</h1>
            <div>
              <Range
                step={10}
                min={minPrice}
                max={maxPrice}
                values={values}
                onChange={handleChange}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="h-1 w-full bg-gray-300 rounded"
                    style={{ ...props.style }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => {
                  const { key, ...rest } = props;
                  return (
                    <div
                      key={key}
                      {...rest}
                      className="w-4 h-4 bg-sky-400 border border-sky-800 rounded-full shadow"
                    ></div>
                  );
                }}
              ></Range>
              <div className="flex justify-between items-center mt-2 text-sm">
                <span>R{values[0]}</span>
                <span>—</span>
                <span>R{values[1]}</span>
              </div>
            </div>
          </div>

          {/* Ratings */}
          <div className="bg-white p-4 w-1/2 ring-1 ring-black/10 shadow-lg">
            <h1 className="font-semibold text-lg mb-2">Ratings</h1>
            <div className="flex space-x-1.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer ${
                    star <= rating
                      ? "text-sky-400 fill-sky-400"
                      : "text-sky-800 fill-none"
                  } hover:text-sky-500 transition-colors`}
                ></Star>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="bg-white p-4 w-1/2 ring-1 ring-black/10 shadow-lg">
            <h1 className="font-semibold text-lg mb-2">Locations</h1>
            <div>
              {locationOptions.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 mb-1 text-sm"
                >
                  <input
                    type="checkbox"
                    name={location}
                    id={location}
                    checked={selectedLocations.includes(location)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedLocations((prev) =>
                        prev.includes(value)
                          ? prev.filter((loc) => loc !== value)
                          : [...prev, value]
                      );
                    }}
                    value={location}
                  />
                  <label htmlFor={location}>{location}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="bg-white p-4 w-1/2 ring-1 ring-black/10 shadow-lg">
            <h1 className="font-semibold text-lg mb-2">Colors</h1>
            <div className="space-y-2 text-sm">
              {colorOption.map((color) => (
                <label key={color} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={color}
                    checked={selectedColors.includes(color)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedColors((prev) =>
                        prev.includes(value)
                          ? prev.filter((c) => c !== value)
                          : [...prev, value]
                      );
                    }}
                  />
                  <span>{color}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset button */}
          <button
            onClick={resetFilters}
            className="w-1/3 mt-4 text-sm font-semibold text-sky-100 bg-blue-600 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full transition translate-x-5"
          >
            Reset
          </button>
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:-translate-x-20">
          {/* Search */}
          <form
            className=" hidden md:col-span-3 md:max-h-25 bg-white p-4 ring-1 ring-black/10 shadow-lg"
            method="get"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="p-4 w-full border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </form>

          {/* Products */}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.name}
                price={product.price}
                rating={product.rating}
                image={product.images[0]}
                category={product.category}
                condition={product.condition}
                location={product.location}
                userName={product.seller.name}
                userAvatar={product.seller.avatar}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">
              No products match the filters.
            </p>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
}
