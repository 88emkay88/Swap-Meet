import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Gavel,
  Heart,
  SeparatorHorizontal,
  Share2,
  Users,
} from "lucide-react";
import ProductsHeader from "../Products/ProductsHeader";
import Footer from "../../components/Footer";

const AuctionDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bidAmount, setBidAmount] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const res = await fetch(
          `${"http://swapmeet.atwebpages.com/api"}/get-auction-details.php?id=${id}`
        );
        const data = await res.json();
        if (data.success) {
          setAuction(data.auction);
        } else {
          console.error(data.message);
          setAuction(null);
        }
      } catch (err) {
        console.error("Failed to fetch auction details:", err);
        setAuction(null);
      }
    };

    fetchAuction();
  }, [id]);

  if (!auction) {
    return (
      <div className="max-w-screen max-h-screen mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Auction Not Found</h1>
          <Link
            to="/auction"
            className="bg-blue-600 text-sky-200 px-3 py-2 hover:bg-blue-400 rounded-2xl"
          >
            Back to Auctions
          </Link>
        </div>
      </div>
    );
  }

  const handleBid = () => {
    console.log(`Placeing bid of $${bidAmount} on ${auction.title}`);
  };

  const sellerInitials = auction.seller
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="max-h-screen max-w-screen mx-auto overflow-x-hidden">
      <ProductsHeader />

      {/* Back Button */}
      <div className="mx-3 my-5 w-1/2 h-1/2  md:w-2/10 md:h-2/7 border py-0.5 px-1.5 md:py-2 md:px-5 hover:bg-gray-200/46 transition-colors duration-300 rounded-2xl">
        <Link className="flex gap-3 items-center justify-center" to="/auction">
          <ArrowLeft />
          <span>Back To Auctions</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Images */}
        <div className="space-y-4 p-10">
          <div className="aspect-square overflow-hidden rounded-2xl shadow-md">
            <img
              src={auction.images?.[selectedImage] || auction.image}
              alt={auction.title}
              className="w-full h-full object-cover"
            />
          </div>

          {auction.images && auction.images.length > 1 && (
            <div className="flex gap-2">
              {auction.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-blue-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column - Details */}
        <div className="space-y-6 p-15">
          {/* Title and Badges */}
          <div>
            <div className="flex items-start justify-between mb-3">
              <h1 className="nd:text-3xl text-lg font-bold">{auction.title}</h1>
              <div className="flex gap-2">
                <button className="border border-gray-300 rounded-lg px-2 py-1">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="border border-gray-300 rounded-lg px-2 py-1">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              <div className="md:px-3 py-1 text-xs md:text-md px-2 md:py-1 rounded-full text-sky-200 bg-blue-500 hover:bg-blue-600">
                {auction.category}
              </div>
              <div className="md:px-3 py-1 text-xs md:text-md px-0.5 md:py-1 rounded-full text-orange-200 bg-orange-500 hover:bg-orange-600">
                {auction.condition}
              </div>

              {auction.isHot && (
                <div className="md:px-3 py-1 text-xs md:text-md px-0.5 md:py-1 rounded-full bg-red-500 text-red-100 hover:bg-red-600">
                  Hot
                </div>
              )}
            </div>
          </div>

          {/* Current Bid Info */}
          <div className="px-4 py-2 border border-gray-300/85 shadow-lg rounded-xl">
            {/* header */}
            <h1 className="flex text-xl items-center gap-2">
              <span className="font-extrabold text-2xl">R</span>
              <span>Current Bid</span>
            </h1>

            {/* Content */}
            <div className="space-y-4">
              <div className="text-3xl font-bold text-green-600">
                R{auction.currentBid}
              </div>
              <div className="flex justify-between text-sm md:text-lg">
                <span>Starting bid: R{auction.startingBid}</span>
                <div className="flex items-cnter gap-1">
                  <Users className="w-5 h-6" />
                  <span>{auction.bidCount} bids</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Clock className="w-4 h-5" />
                <span className="font-medium">{auction.timeLeft} left</span>
              </div>
            </div>
          </div>

          {/* Bid Form */}
          <div className="px-4 py-2 border border-gray-300/85 shadow-lg rounded-xl">
            {/* Header */}
            <h1 className="text-xl">Place Your Bid</h1>

            {/* Content */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder={`Minimum: R${auction.currentBid + 5}`}
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  min={auction.currentBid + 5}
                  className="md:pl-8 pl-3 py-3 w-full text-base rounded-full border focus:border-blue-500 transition-colors"
                />
                <button
                  className="px-3 py-2  flex rounded-2xl text-sky-100 items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-md"
                  onClick={handleBid}
                >
                  <Gavel className="w-4 h-4" />
                  <span>Bid</span>
                </button>
              </div>
              <p className="text-sm">Minimum bid increment: R5</p>
            </div>
          </div>

          {/* Seller Info */}
          <div className="px-4 py-2 border border-gray-300/85 shadow-lg rounded-xl">
            {/* Header  */}
            <h1 className="text-xl">Seller Information</h1>

            {/* Content */}
            <div className="flex items-center">
              {/* User Avatar */}
              <div className="h-12 w-12 mr-2 mt-2 rounded-full bg-black/20 text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
                {auction.image ? (
                  <img
                    src={auction.image}
                    alt={auction.seller}
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  sellerInitials
                )}
              </div>
              <div>
                <p className="font-medium">{auction.seller}</p>
                <p className="text-sm">Active Seller</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-4 py-2 border border-gray-300/85 shadow-lg rounded-xl">
            {/* Header */}
            <h1 className="text-xl">Description</h1>

            {/* content */}
            <div>
              <p className="leading-relaxed mt-2">{auction.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bid History */}
      <div className="mt-12 px-10">
        <div className="px-4 py-2 border border-gray-300/85 shadow-lg rounded-xl">
          {/* Header */}
          <h1 className="text-2xl">Bid History</h1>

          {/* Content */}
          <div className="space-y-3">
            {auction.bids?.map((bid, index) => (
              <div
                className="w-full py-2 border-b border-gray-300/75"
                key={index}
              >
                <div className="flex w-full justify-between items-center py-2">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-6 rounded-full bg-black/20 text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
                      {bid.bidderAvatar ? (
                        <img
                          src={bid.bidderAvatar}
                          alt={bid.bidder}
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        bid.bidder.slice(0, 2).toUpperCase()
                      )}
                    </div>
                    <span className="font-medium">{bid.bidder}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600">
                      R{bid.amount}
                    </div>
                    <div className="text-xs">R{bid.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AuctionDetails;
