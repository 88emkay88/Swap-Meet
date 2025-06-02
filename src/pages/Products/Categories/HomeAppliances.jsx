import React, { useState, useEffect } from "react";
import ProductsHeader from "../ProductsHeader";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Footer from "../../../components/Footer";
import ProductCard from "../ProductCard";
import locationOptions from "../../../Data/locations";
import products from "../../../Data/products";
import Sidebar from "../Sidebar";

export default function HomeAppliances() {
  //— State for filters & pagination
  const [search, setSearch] = useState("");
  const [values, setValues] = useState([0, 1500]);
  const [rating, setRating] = useState(0);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const minPrice = 0;
  const maxPrice = 10000;

  const productsPerPage = 9;

  //— Filter only category === "HomeAppliances"
  const HomeAppliances = products.filter((p) => p.category === "Home-Appliances");

  const checkbox = [
    "Refrigerators",
    "Washing Machines",
    "Microwaves",
    "Air Conditioners",
    "Vacuum Cleaners",
    "Water Heaters",
    "Dishwashers",
    "Irons & Steamers",
    "Blenders & Mixers",
    "Toasters & Ovens",
    "Coffee Makers",
    "Electric Kettles",
    "Air Purifiers",
    "Ceiling Fans",
    "Dehumidifiers",
  ];

  const colorOption = ["Red", "Blue", "Black", "White", "Green", "Yellow"];

  //— Apply all your filters
  const filtered = HomeAppliances.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      product.price >= values[0] &&
      product.price <= values[1] &&
      (!rating || product.rating === rating) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.subcategory)) &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedLocations.length === 0 ||
        selectedLocations.includes(product.location))
    );
  });

  //— Pagination slice
  const last = currentPage * productsPerPage;
  const first = last - productsPerPage;
  const pageItems = filtered.slice(first, last);

  //— Reset filters back to page 1 on change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, values, rating, selectedColors, selectedLocations]);

  const resetFilters = () => {
    setSearch("");
    setValues([0, 1500]);
    setRating(0);
    setSelectedColors([]);
    setSelectedLocations([]);
  };

  const handleChange = (newValues) => {
    setValues(newValues);
  };

  return (
    <div className="overflow-x-hidden">
      <ProductsHeader />

      {/* Hero */}
      <div className="relative h-60 md:h-150">
        <img
          src="/src/assets/images/HomeAppliance-bg.jpg"
          alt="Home Appliances hero"
          className="w-full h-full object-cover rounded-b-4xl"
        />
        <h1 className="absolute top-[68%] left-[20%] text-5xl md:top-[10%] md:left-[10%] cursor-default text-white font-bold md:text-12xl">
          Home Appliances
        </h1>
      </div>

      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar */}
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

        {/* Main */}
        <div className="md:col-span-3 space-y-4 md:-translate-x-20">
          {/* Search Bar */}
          <form className="hidden md:block bg-white p-4 ring-1 ring-black/10 shadow-lg rounded-2xl">
            <input
              type="text"
              className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Search Electronics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>

          {/* Grid of Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pageItems.length ? (
              pageItems.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.name}
                  image={p.images?.[0] || p.image}
                  price={p.price}
                  rating={p.rating}
                  condition={p.condition}
                  location={p.location}
                  category={p.category}
                  userName={p.seller.name}
                  userAvatar={p.seller.avatar}
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
