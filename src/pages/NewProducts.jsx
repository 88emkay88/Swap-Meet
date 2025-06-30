import React, { useEffect, useState } from "react";
import ProductsHeader from "./Products/ProductsHeader";
import Breadcrumbs from "../components/Breadcrumbs";
import Footer from "../components/Footer";
import { SlidersHorizontal, X } from "lucide-react";
import ProductCard from "./Products/ProductCard";
import colorOption from "../Data/colors";
import Sidebar from "./Products/Sidebar";
import { Range } from "react-range";
import newBg from "../assets/images/New-Bg.jpg";
import newBanner from "../assets/images/NewBanner.png";

const NewProducts = () => {
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

  const dynamicLocations = [
    ...new Set(products.map((p) => p.location).filter(Boolean)),
  ];

  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${"https://swapmeet.host.adellya.my.id/api"}/get-all-products.php`
        );

        const data = await res.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching Products", err);
      }
    };

    fetchProducts();
  }, []);

  //— Filter only category === "newest"
  const sorted = [...products].sort(
    (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
  );

  const checkbox = [
    "Electronics",
    "Accessories",
    "Gaming",
    "Sports",
    "Auction",
  ];

  const applyMobileFilters = () => {
    setShowFilters(false);
  };

  const filteredProducts = sorted.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      product.Price >= values[0] &&
      product.Price <= values[1] &&
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
      <div className="flex justify-center p-5 md:p-0 mt-7">
        <div className="md:w-7/8 md:h-150 relative">
          <img
            src={newBg}
            alt="shopping cart with cereals"
            className="h-full w-full md:rounded-4xl rounded-xl "
          />

          <img
            src={newBanner}
            className="absolute md:-top-14 -top-3 -left-3 md:-left-14 w-2/8"
          />

          <h1 className="absolute top-[45%] left-[12%] text-4xl md:text-5xl md:top-[10%] md:left-[14%] cursor-default text-white font-bold md:text-12xl">
            New Products
          </h1>
        </div>
      </div>

      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar Filters */}
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

        <div className="md:col-span-3 md:-translate-x-20 space-y-4">
          {/* Search */}
          <form
            className=" flex md:block md:max-h-25 bg-white p-4 ring-1 ring-black/10 shadow-lg"
            method="get"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products..."
              className="p-4 w-5/6 md:w-full border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-400"
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
            {/* Products */}
            {filteredProducts.length > 0 ? (
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
              <p className="text-gray-500 col-span-full">No products found.</p>
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
};

export default NewProducts;
