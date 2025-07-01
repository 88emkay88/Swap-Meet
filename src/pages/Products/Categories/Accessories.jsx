import React, { useState, useEffect } from "react";
import ProductsHeader from "../ProductsHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import ProductCard from "../ProductCard";
import colorOption from "../../../Data/colors";
import Sidebar from "../Sidebar";
import { SlidersHorizontal, X } from "lucide-react";
import { Range } from "react-range";
import AccessoriesBg from "../../../assets/images/bg-accessories.jpg";

export default function Accessories() {
  //— State for filters & pagination
  const [search, setSearch] = useState("");
  const minPrice = 0;
  const maxPrice = 10000;
  const [values, setValues] = useState([100, 4300]);
  const [rating, setRating] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const productsPerPage = 9;
  const [showFilters, setShowFilters] = useState(false);

  //Fetch products
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await fetch(
          `${"https://swapmeet.liveblog365.com/api"}/get-all-products.php`
        );

        const data = await res.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchAllProducts();
  }, []);

  //— Filter only category === "Accessories"
  const accessories = products.filter((p) => p.category === "Accessories");

  const dynamicLocations = [
    ...new Set(accessories.map((p) => p.location).filter(Boolean)),
  ];

  const checkbox = [
    "Bags & Purses",
    "Belts",
    "Hats & Caps",
    "Scarves & Shawls",
    "Sunglasses",
    "Watches",
    "Jewelry",
    "Hair Accessories",
    "Wallets & Cardholders",
    "Keychains & Charms",
    "Gloves & Mittens",
    "Ties & Bowties",
    "Face Masks",
    "Umbrellas",
    "Brooches & Pins",
  ];

  const applyMobileFilters = () => {
    setShowFilters(false);
  };

  //— Apply  filters
  const filtered = accessories.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      product.Price >= values[0] &&
      product.Price <= values[1] &&
      (!rating || product.rating === rating) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.subcategory)) &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(product.location))
    );
  });

  //— Pagination slice
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered.slice(
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

  const toogleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    setShowFilters(false);
  }, [currentPage]);

  return (
    <div className="overflow-x-hidden">
      <ProductsHeader />

      {/* Background picture */}
      <div className="relative h-60 md:h-150">
        <img
          src={AccessoriesBg}
          alt="Accessories hero"
          className="w-full h-full object-cover rounded-b-4xl"
        />
        <h1 className="absolute top-[28%] left-[10%] text-5xl md:top-[20%] md:left-[6%] cursor-default text-white font-bold md:text-12xl">
          Accessories
        </h1>
      </div>

      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar */}
        <Sidebar
          checkbox={checkbox}
          colorOption={colorOption}
          dynamicLocations={dynamicLocations}
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

        <div className="md:col-span-3 space-y-4 md:-translate-x-20">
          {/* Search Bar */}
          <form
            className="flex md:block bg-white p-4 ring-1 ring-black/10 shadow-lg rounded-2xl"
            method="get"
          >
            <input
              type="text"
              className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Search Accessories..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button"
              className="md:hidden ml-3 p-2 w-16 h-15 flex items-center justify-center rounded-full  border-1 border-gray-400"
              onClick={toogleFilters}
            >
              <SlidersHorizontal />
            </button>
          </form>

          {showFilters && (
            <div className="fixed h-full inset-0 bg-white/80 backdrop-blur-sm z-50 md:hidden">
              <div className="fixed bottom-0 left-0 right-0 top-0 max-h-full bg-white/95 p-6 shadow-lg animate-in slide-in-from-bottom duration-300 ">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button type="button" onClick={toogleFilters}>
                    <X />
                  </button>
                </div>

                <div className="space-y-6 overflow-auto h-[calc(100%-8rem)]">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Category</h3>
                    <select
                      value={selectedCategories[0] || ""}
                      onChange={(e) => {
                        const selected = Array.from(
                          e.target.selectedOptions,
                          (option) => option.value
                        );
                        setSelectedCategories(selected);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Category</option>
                      {checkbox.map((category, idx) => (
                        <option key={`${category}-${idx}`} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price (R)</h3>
                    <div className="px-2">
                      <Range
                        step={10}
                        min={minPrice}
                        max={maxPrice}
                        values={values}
                        onChange={(values) => setValues(values)}
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
                              className="w-5 h-5 bg-sky-400 border border-sky-800 rounded-full shadow"
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
                  <div>
                    <h3 className="text-sm font-medium mb-3">Ratings</h3>
                    <div>
                      <select
                        onChange={(e) => setRating(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                      >
                        <option value={0}>Select Rating</option>
                        {[1, 2, 3, 4, 5].map((star, idx) => (
                          <option
                            key={`${star}-${idx}`}
                            value={star}
                            onClick={() => setRating(star)}
                          >
                            {star} Star{star > 1 && "s"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Locations */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Locations</h3>
                    <select
                      value={selectedLocations[0] || ""}
                      onChange={(e) => {
                        const options = Array.from(
                          e.target.selectedOptions
                        ).map((opt) => opt.value);
                        setSelectedLocations(options);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Location</option>
                      {dynamicLocations.map((location, idx) => (
                        <option value={location} key={`${location}-${idx}`}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Colors */}
                  <div>
                    <h3 className="text-sm font-medium mb-3">Colors</h3>
                    <select
                      value={selectedColors[0] || ""}
                      onChange={(e) => {
                        const options = Array.from(
                          e.target.selectedOptions
                        ).map((opt) => opt.value);
                        setSelectedColors(options);
                      }}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">Select Color</option>
                      {colorOption.map((color, idx) => (
                        <option key={`${color}-${idx}`} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* buttons */}
                  <div className="flex items-center justify-between w-full mt-4 gap-2">
                    {/* Apply filters */}
                    <button
                      onClick={applyMobileFilters}
                      className="text-xs font-semibold text-sky-100 bg-blue-600 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full"
                    >
                      Apply Filters
                    </button>

                    {/* Reset button */}
                    <button
                      onClick={resetFilters}
                      className=" text-xs font-semibold text-sky-100 bg-blue-600 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Product Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.length ? (
              currentProducts.map((product) => (
                <ProductCard
                  key={product.ProductId}
                  id={product.ProductId}
                  title={product.title}
                  price={product.Price}
                  rating={product.rating}
                  image={product.mainImage}
                  category={product.category}
                  condition={product.condition}
                  location={product.location}
                  userName={product?.sellerName || ""}
                  userAvatar={product?.Avatar || ""}
                />
              ))
            ) : (
              <p className="col-span-full text-gray-500">No products found.</p>
            )}
          </section>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(filtered.length / productsPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
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
