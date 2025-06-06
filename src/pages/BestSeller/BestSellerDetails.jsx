import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import bestSellerItems from "../../Data/BestSellerItems";
import ProductsHeader from "../Products/ProductsHeader";
import Footer from "../../components/Footer";
import {
  ArrowLeft,
  Calendar,
  Crown,
  Heart,
  MapPin,
  MessageCircle,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Star,
  Tag,
  TrendingUp,
  User,
} from "lucide-react";

const BestSellerDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const foundItem = bestSellerItems.find((i) => i.id === id);
    setItem(foundItem || null);
  }, [id]);

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Best Seller Not Found</h1>
          <Link to="/bestsellers">
            <button className="h-10 px-4 py-2 bg-blue-600 text-blue-200 rounded-2xl">
              Back to Best Sellers
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    console.log(
      `${isWishlisted ? "Removed from" : "Added to"} wishlist: ${item.title}`
    );
  };

  const handleMessage = () => {
    console.log(`Starting conversation about ${item.title}`);
  };

  const handlePurchase = () => {
    console.log(`Purchasing ${item.title} for ${item.price}`);
  };

  const handleBid = () => {
    console.log(`Placing bid on ${item.title}`);
  };

  const sellerInitials = item.seller
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-500 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-amber-600 text-white";
    return "bg-swap text-white";
  };

  return (
    <div className="max-w-screen max-h-screen">
      <ProductsHeader />

      {/* Container */}
      <div className="px-4 py-2 mx-6">
        {/* Back Button */}
        <div className="mx-3 my-5 w-1/2 h-1/2  md:w-2/10 md:h-2/7 border py-0.5 px-1.5 md:py-2 md:px-5 hover:bg-gray-200/46 transition-colors duration-300 rounded-2xl">
          <Link
            className="flex gap-3 items-center justify-center"
            to="/best-sellers"
          >
            <ArrowLeft />
            <span>Back To Best Seller</span>
          </Link>
        </div>

        {/* Best Seller Badge */}
        <div className="mb-6 text-center">
          <div
            className={`${getRankBadgeColor(
              item.rank
            )} text-lg px-4 py-2 gap-2 inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
          >
            <Crown className="w-5 h-5" />#{item.rank} Best Seller
            <TrendingUp className="w-4 h-4" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-md">
              <img
                src={item.images?.[selectedImage] || item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {item.images && item.images.length > 1 && (
              <div className="flex gap-2">
                {item.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-swap"
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
          <div className="space-y-6 px-4">
            {/* Title and Actions */}
            <div className="border border-gray-300 rounded-2xl p-4">
              <div>
                <div className="flex items-start justify-between mb-3">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <div className="flex gap-2">
                    <button
                      className="border p-3 rounded-2xl"
                      onClick={handleWishlist}
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isWishlisted ? "fill-red-500 text-red-500" : ""
                        }`}
                      />
                    </button>
                    <button className="border p-3 rounded-2xl">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <div className=" text-lg px-4 py-2 gap-2 inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {item.category}
                  </div>

                  <div className=" text-lg px-4 py-2 gap-2 inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    {item.condition}
                  </div>

                  <div
                    className={` text-lg px-4 py-2 ${
                      item.type === "Buy Now"
                        ? "bg-green-600 text-green-100"
                        : "bg-blue-600 text-sky-50"
                    } gap-2 inline-flex items-center rounded-full  font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2`}
                  >
                    {item.type}
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-6 h-8 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div>
                {/* header */}
                <div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">{item.price}</div>
                    {item.originalPrice && (
                      <div className="text-lg line-through">
                        Was {item.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className="text-center space-y-2">
                    <p className="text-sm">{item.sales} Sale Completed</p>
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="font-medium">
                        Trending #{item.rank} in {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="border border-gray-300 rounded-2xl shadow py-3 px-3">
              {/* header */}
              <div>
                <div className="flex items-center gap-2 text-xl font-semibold mb-2">
                  {item.type === "Buy Now" ? (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Purchase Now
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      Place Bid
                    </>
                  )}
                </div>
              </div>
              {/* Content */}
              <div>
                <div className="space-y-4">
                  <p className="text-sm">
                    {item.type === "Buy Now"
                      ? "Buy this item immediately at the listed price"
                      : "Current highest bid or place your own bid"}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={
                        item.type === "Buy Now" ? handlePurchase : handleBid
                      }
                      className="flex-1 px-8 py-2 rounded-2xl bg-blue-500 text-sky-50 font-semibold"
                    >
                      {item.type === "Buy Now" ? "Buy Now" : "Place Bid"}
                    </button>
                    <button
                      className="border px-3 py-1 rounded-2xl flex items-center gap-1"
                      onClick={handleMessage}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Message</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="border border-gray-300 rounded-2xl shadow py-3 px-5">
              {/* CardHeader */}
              <div>
                <h1 className="text-xl font-semibold mb-3">Top Seller</h1>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-center gap-3 mb-4">
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
                        <span>{sellerInitials(item.seller)}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <p className="font-medium">{item.seller}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{item.sellerRating} rating</span>
                      <span>•</span>
                      <span>{item.sellerSales} sales</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>
              </div>

              {/* Item Details */}
              <div>
                {/* Header */}
                <div>
                  <h1 className="text-lg">Details</h1>
                </div>

                {/* Content */}
                <div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 max-h-4" />
                      <span>Posted:</span>
                      <span>{item.createdAt}</span>
                    </div>

                    {item.dimensions && (
                      <div className="flex items-center gap-2 text-sm">
                        <span>Dimensions:</span>
                        <span>{item.dimensions}</span>
                      </div>
                    )}

                    {item.weight && (
                      <div className="flex items-center gap-2 text-sm">
                        <span>Weight:</span>
                        <span>{item.weight}</span>
                      </div>
                    )}

                    {item.materials && (
                      <div>
                        <span className="text-sm">Materials:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.materials.map((material, index) => (
                            <div
                              key={index}
                              className="text-xs p-3 bg-teal-600 text-sky-50 rounded-3xl"
                            >
                              {material}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.pickupOptions && (
                      <div>
                        <span className="text-sm ">Pickup Options:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.pickupOptions.map((option, index) => (
                            <div
                              key={index}
                              className="text-xs p-3 bg-teal-600 text-sky-50 rounded-3xl"
                            >
                              {option}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description and Story */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="border border-gray-300 rounded-2xl shadow py-3 px-3">
              {/* header */}
              <div>
                <h1 className="text-lg font-semibold">Description</h1>
              </div>

              {/* Content */}
              <p className="leading-relaxed">{item.descrtiption}</p>
            </div>
          </div>

          {item.story && (
            <div className="border border-gray-300 rounded-2xl shadow py-3 px-3">
              {/* Header */}
              <div>
                <h1 className="text-lg font-semibold">Story Behind the Item</h1>
              </div>

              {/* Content */}
              <div>
                <p className="leading-relaxed">{item.story}</p>
              </div>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="mt-8">
            <div className="border border-gray-300 rounded-2xl flex flex-col items-center shadow py-10 px-3">
              {/* header */}
              <div>
                <h1 className="flex items-center text-lg mb-2 font-semibold gap-2">
                  <Tag className="w-5 h-5" />
                  Tags
                </h1>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <div key={idx} className="px-4 py-2 border rounded-2xl">
                      #{tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why this is a best seller */}
        <div className="mt-8 flex justify-center">
          <div className="border w-full flex flex-col items-center border-yellow-300 bg-yellow-100 text-amber-800 rounded-2xl shadow py-3 px-3">
            {/* Header */}
            <div className="text-center p-8">
              <h1 className="flex items-center text-lg font-semibold gap-2 text-yellow-800">
                <Crown className="w-5 h-5" />
                Why This a Best Seller
              </h1>
            </div>

            {/* Content */}
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>Perfect {item.rating}/5 rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span>{item.sales} completed sales</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600" />
                  <span>Top-rated seller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BestSellerDetails;
