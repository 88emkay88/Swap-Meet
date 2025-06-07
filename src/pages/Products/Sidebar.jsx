import React from "react";
import { Range } from "react-range";
import { Star } from "lucide-react";

const Sidebar = ({
  checkbox,
  colorOption,
  locationOptions,
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  selectedLocations,
  setSelectedLocations,
  rating,
  setRating,
  values,
  minPrice,
  maxPrice,
  handleChange,
  resetFilters,
}) => {
  return (
    <aside className="hidden md:block md:col-span-1 space-y-6">
      {/* Popular Categories */}
      <div className="bg-white p-5 w-2/3 ring-1 ring-black/10 shadow-lg">
        <h1 className="font-semibold text-lg mb-2">Popular Categories</h1>
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

      {/* Filter by price */}
      <div className="bg-white p-4 w-2/3 ring-1 ring-black/10 shadow-lg">
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
      <div className="bg-white p-4 w-2/3 ring-1 ring-black/10 shadow-lg">
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
      <div className="bg-white p-4 w-2/3 ring-1 ring-black/10 shadow-lg">
        <h1 className="font-semibold text-lg mb-2">Locations</h1>
        <select
          value={selectedLocations[0] || ""}
          onChange={(e) => {
            const options = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value
            );
            setSelectedLocations(options);
          }}
          className="w-full p-2 border border-gray-300 rounded-lg"
        >
          <option value="">Select Location</option>
          {locationOptions.map((location, idx) => (
            <option value={location} key={`${location}-${idx}`}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Colors */}
      <div className="bg-white p-4 w-2/3 ring-1 ring-black/10 shadow-lg">
        <h1 className="font-semibold text-lg mb-2">Colors</h1>
        <select
          value={selectedColors[0] || ""}
          onChange={(e) => {
            const options = Array.from(e.target.selectedOptions).map(
              (opt) => opt.value
            );
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

      {/* Reset button */}
      <button
        onClick={resetFilters}
        className="w-1/3 mt-4 text-sm font-semibold text-sky-100 bg-blue-600 hover:bg-sky-600 cursor-pointer px-4 py-2 rounded-full transition translate-x-5"
      >
        Reset
      </button>
    </aside>
  );
};

export default Sidebar;
