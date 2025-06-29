import React, { useEffect, useState } from "react";
import ProductsHeader from "./Products/ProductsHeader";
import { Clock, FlameIcon, Gavel, Search } from "lucide-react";
import AuctionCard from "./Auction/AuctionCard";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Auction = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [auctions, setAuctions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchAuctions = async () => {
      try {
        const res = await fetch(
          `${"https://swapmeet-backend.byethost12.com/api"}/get-auctions.php`
        );
        const data = await res.json();
        if (data.success) {
          setAuctions(data.auctions);
        } else {
          console.error("Failed to fetch auctions", data.message);
        }
      } catch (error) {
        console.error("Error fetching auctions", error);
      }
    };

    fetchAuctions();
  }, []);

  const filteredAuctions = auctions.filter((auction) => {
    const matchesSearch =
      auction.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auction.category.toLowerCase().includes(searchQuery.toLowerCase());
    if (filter === "ending-soon") {
      const secondsLeft = Math.floor(
        (new Date(auction.endTime) - new Date()) / 1000
      );
      return matchesSearch && secondsLeft > 0 && secondsLeft <= 3600 * 3;
    }

    if (filter === "hot") {
      return matchesSearch && auction.isHot;
    }

    return matchesSearch;
  });

  return (
    <div className="overflow-x-hidden">
      <ProductsHeader />
      <div className="text-center my-8">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Live Auctions
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover amazing items from our community. Bid on unique treasures and
          find incredible deals in real-time auctions!
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-8">
        <div className="flex flex-col lg:flex-row p-5 gap-6 items-center justify-between">
          <form className="relative flex-1 max-w-lg" method="get">
            <input
              type="search"
              placeholder="Search auctions by title or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 w-full text-base rounded-full border-2 focus:border-blue-500 transition-colors"
            />
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </form>

          <div className="flex gap-3 flex-wrap justify-center mr-4">
            <button
              onClick={() => setFilter("all")}
              className={`rounded-full px-6 py-2 ${
                filter === "all"
                  ? "bg-blue-600 text-sky-200 hover:bg-blue-700"
                  : "border-2 hover:border-blue-500"
              }`}
            >
              All Auctions
            </button>
            <button
              onClick={() => setFilter("ending-soon")}
              className={`rounded-full flex items-center px-6 py-2 ${
                filter === "ending-soon"
                  ? "bg-blue-600 text-sky-200 hover:bg-blue-700"
                  : "border-2 hover:border-orange-500"
              }`}
            >
              <Clock />
              <span>Ending Soon</span>
            </button>
            <button
              onClick={() => setFilter("hot")}
              className={`rounded-full flex items-center px-6 py-2 ${
                filter === "hot"
                  ? "bg-blue-600 text-sky-200  hover:bg-blue-700"
                  : "border-2 hover:border-orange-500"
              }`}
            >
              <FlameIcon />
              <span>Hot</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className="mb-8 px-10">
        <p className="text-lg">
          {filteredAuctions.length} auction
          {filteredAuctions.length !== 1 ? "s" : ""} found
          {searchQuery && `for "${searchQuery}"`}
        </p>
      </div>

      {/* Auctions Grid */}
      {filteredAuctions.length > 0 ? (
        <div className="grid p-15 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredAuctions.map((auction) => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Gavel className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-2xl font-semibold mb-3">No auctions found</h3>
          <p className="text-lg mb-8 max-w-md mx-auto">
            {searchQuery
              ? `No auctions match your search for "${searchQuery}". Try Different Keywords`
              : "Try adjusting your filter criteria to see more auctions."}
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setFilter("all");
            }}
            className="bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3"
          >
            View All Auctions
          </button>
        </div>
      )}

      {/* CTA for Sellers */}
      <div className="px-8">
        <div className="text-center mt-20 py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl border">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Own Auction?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            List your items and let our community bid on them. It's easy,
            secure, and profitable!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 py-4 text-lg font-semibold shadow-lg">
            <Link
              className="flex items-center text-sky-200"
              to="/dashboard/post-item"
            >
              <Gavel className="w-5 h-5 mr-2" />
              <span>Start an Auction</span>
            </Link>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auction;
