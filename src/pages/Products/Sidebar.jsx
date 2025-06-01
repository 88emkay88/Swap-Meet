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
  );
};

export default Sidebar;
