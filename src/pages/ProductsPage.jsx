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
import Sidebar from "./Products/Sidebar";

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
  const minPrice = 0;
  const maxPrice = 10000;
  const [values, setValues] = useState([100, 1500]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

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

  // Slice Filtered products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
        <Sidebar
          checkbox={checkbox}
          colorOption={colorOption}
          locationOptions={locationOptions}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedColors={selectedColors}
          setSelectedColors={setSelectedColors}
          selectedLocations={selectedLocations}
          setSelectedLocations={setSelectedLocations}
          rating={rating}
          setRating={setRating}
          values={values}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleChange={handleChange}
          resetFilters={resetFilters}
        />

        <div className="md:col-span-3 md:-translate-x-20 space-y-4">
          {/* Search */}
          <form
            className="hidden md:block md:max-h-25 bg-white p-4 ring-1 ring-black/10 shadow-lg"
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

          {/* Product Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Products */}
            {filteredProducts.length > 0 ? (
              currentProducts.map((product) => (
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

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(filteredProducts.length / productsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-sky-200"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
