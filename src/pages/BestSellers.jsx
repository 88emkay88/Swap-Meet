import React, { useEffect, useState } from "react";
import ProductsHeader from "./Products/ProductsHeader";
import Footer from "../components/Footer";
import {
  Crown,
  Filter,
  MapPin,
  Search,
  ShoppingBag,
  Star,
  TrendingUp,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const category = [
  "Electronics",
  "Accessories",
  "Home Appliances",
  "Gaming",
  "Sports",
];

const types = ["All", "Buy Now", "Auction"];

const BestSellers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [sortBy, setSortBy] = useState("rank");
  const [bestSellersItems, setBestSellersItems] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetch(`${"https://swapmeet-backend.iceiy.com/api"}/get-best-sellers.php`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBestSellersItems(data.bestSellers);
          console.log("best sellers: ", data.bestSellers);
        }
      })
      .catch((err) => console.error("Failed to load best sellers", err));
  }, []);

  const filteredItems = bestSellersItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesType = selectedType === "All" || item.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );

      case "price-low": {
        const priceA = parseInt(a.price.replace("$", ""));
        const priceB = parseInt(b.price.replace("$", ""));
        return priceA - priceB;
      }
      case "price-high": {
        const priceA2 = parseInt(a.price.replace("$", ""));
        const priceB2 = parseInt(b.price.replace("$", ""));
        return priceB2 - priceA2;
      }
      case "rating": {
        return b.rating - a.rating;
      }
      default: {
        return a.rank - b.rank;
      }
    }
  });

  const SellerInitials = (name) => {
    return name
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-amber-600 text-white";
    else return "bg-sky-700 text-sky-200";
  };

  return (
    <div className="max-w-screen max-h-screen overflow-x-hidden">
      <ProductsHeader />
      {/* Container */}
      <div className="mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-yellow-500" />
            <h1 className="text-4xl font-bold">Best Sellers</h1>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
          <div>
            <p className="text-lg max-w-2xl mx-auto">
              Discover the most popular items in our marketplace. These
              top-performing listings have captured the hearts of our community.
            </p>
          </div>
        </div>

        {/* Top 3 Showcase */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            🏆 Top 3 Champions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bestSellersItems.slice(0, 3).map((item) => (
              <Link key={item.id} to={`/best-sellers/${item.id}`}>
                <div className="rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-yellow-400/30 relative">
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className={`px-3 py-2 ${getRankBadgeColor(
                        item.rank
                      )} font-bold text-lg rounded-xl`}
                    >
                      #{item.rank}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-sm rounded-full px-3 py-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-bold">{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* CardHeader */}
                  <div className="pb-3 pt-4">
                    <h1 className="text-2xl font-semibold line-clamp-1 text-center">
                      {item.title}
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <div className="border border-sky-600 rounded-2xl px-3 py-1">
                        {item.category}
                      </div>
                      <div
                        className={` px-2 py-1 rounded-2xl ${
                          item.type === "Buy Now"
                            ? "bg-green-600 text-green-100"
                            : "bg-blue-600 text-blue-100"
                        }`}
                      >
                        {item.type}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-0 text-center">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-sky-400">
                        {item.price}
                      </div>
                      {item.originalPrice && (
                        <div className="line-through">
                          Was {item.originalPrice}
                        </div>
                      )}
                      <div className="text-sm md:text-md">
                        {item.sales} sales
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-2 mb-2">
                      {/* Avatar */}
                      <div className="w-6 h-6">
                        {item.sellerAvatar !== "" ? (
                          <img
                            src={item.sellerAvatar}
                            alt={item.seller}
                            className="h-7 w-7 border object-cover rounded-full"
                          />
                        ) : (
                          <div className="flex mr-2 border-2 md:w-7 w-15 h-10 md:h-7 rounded-full items-center justify-center">
                            <span>{SellerInitials(item.seller)}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm">{item.seller}</span>
                    </div>

                    <div className="flex items-center mb-3 justify-center gap-1 text-sm">
                      <MapPin className="w-3 h-3" />
                      <span className="text-md">{item.category}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative  max-w-2xl mx-auto">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              placeholder="Search best sellers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg w-full border border-gray-400 focus:outline-sky-300 rounded-2xl"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex justify-center">
            <button
              className="border flex items-center px-3 py-1 rounded-2xl gap-2"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="w-4 h-4" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto p-6 bg-gray-50 rounded-lg">
              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {category.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort by */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Sort By
                </label>
                <select
                  class="w-full p-2 border border-gray-300 rounded-lg"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="">Sort by</option>
                  <option value="rank">Best Rank</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>

              {/* Button */}
              <div className="flex items-end">
                <button
                  className="px-3 py-1 border rounded-2xl hover:bg-sky-100 w-full"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setSelectedType("All");
                    setSortBy("rank");
                  }}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Result Count */}
        <div className="mb-6">
          <p className="text-center">
            Showing {sortedItems.length} best Seller
            {sortedItems.length !== 1 ? "s" : ""}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <Link key={item.id} to={`/best-sellers/${item.id}`}>
              <div className=" border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-t-2xl"
                    />
                  </div>
                  <div className="absolute top-3 left-3">
                    <div
                      className={`px-3 py3 rounded-full  ${getRankBadgeColor(
                        item.rank
                      )}`}
                    >
                      #{item.rank} Best Seller
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{item.rating}</span>
                    </div>
                  </div>
                </div>

                {/* CardHeader */}
                <div className="pb-3 p-3 flex flex-col items-center">
                  <h1 className="text-lg line-clamp-1">{item.title}</h1>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="px-3 py3 rounded-full border">
                      {item.category}
                    </div>
                    <div
                      className={`px-3 py3 rounded-full ${
                        item.type === "Buy Now"
                          ? "bg-green-600 text-green-100"
                          : "bg-blue-600"
                      }`}
                    >
                      {item.type}
                    </div>
                    <span>•</span>
                    <span>{item.createdAt}</span>
                  </div>
                </div>

                {/* CardContent */}
                <div className="p-4">
                  <p className="text-sm text-center line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <div className="text-center">
                      <div className="text-xl font-bold text-sky-400">
                        {item.price}
                      </div>
                      {item.originalPrice && (
                        <div className="text-sm line-through">
                          Was {item.originalPrice}
                        </div>
                      )}
                      <div className="text-sm">{item.sales} sales</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6">
                          {item.sellerAvatar !== "" ? (
                            <img
                              src={item.sellerAvatar}
                              alt={item.seller}
                              className="h-7 w-7 border object-cover rounded-full"
                            />
                          ) : (
                            <div className="flex mr-2 border-2 md:w-7 w-15 h-10 md:h-7 rounded-full items-center justify-center">
                              <span>{SellerInitials(item.seller)}</span>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <User className="w-3 h-3" />
                          <span>{item.seller}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {sortedItems.length === 0 && (
          <div className="text-center py-12">
            <Crown className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium mb-2">No best sellers found</h3>
            <p className="mb-6">
              Try adjusting your search criteria or browse all available items.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
                setSelectedType("All");
                setSortBy("rank");
              }}
              className="px-5 py-1 bg-blue-600 text-sky-100 rounded-xl hover:bg-blue-500 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="p-20">
          <div className="mt-16 text-center bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-lg border border-yellow-200">
            <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Want to Be a Best Seller?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Join our community of successful sellers and share your items with
              thousands of potential buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-5 py-1 bg-blue-600 text-sky-100 rounded-xl hover:bg-blue-500 transition-colors">
                <Link className="flex items-center justify-center" to="">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  <span>Sell Your Items</span>
                </Link>
              </button>
              <button className="px-5 py-1 bg-blue-600 text-sky-100 rounded-xl hover:bg-blue-500 transition-colors">
                <Link to="/auction">Start an Auction</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BestSellers;
