import { Clock, Flame, Gavel, TrendingUp, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const AuctionCard = ({ auction }) => {
  const sellerInitials = auction.seller
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const isEndingSoon =
    auction.timeLeft.includes("h") && !auction.timeLeft.includes("d");

  return (
    <div className="overflow-hidden hover:shadow-xl transition-all duration-300 rounded-xl group border-0 shadow-md">
      {/* Background image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={auction.image}
          alt={auction.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Is Hot Badge */}
          {auction.isHot && (
            <div className="flex  items-center text-red-200 gap-2 p-5 rounded-full absolute top-3 left-3 bg-red-500 hover:bg-red-600 shadow-lg">
              <Flame className="mr-1" size={20} />
              <span>Hot</span>
            </div>
          )}

          {/* Ending Soon Badgw */}
          {isEndingSoon && (
            <div className="flex items-center text-orange-200/90 gap-2 p-5 rounded-full absolute top-3 right-3 bg-orange-500 hover:bg-orange-600 shadow-lg">
              <Clock className="mr-1" size={20} />
              <span>Ending Soon</span>
            </div>
          )}

          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
            {auction.condition}
          </div>
        </div>
      </div>

      {/* CardHeader */}
      <div className="pb-3 px-6 py-5 ">
        <div className="flex items-start mb-3 justify-between gap-2">
          <h2 className="text-lg md:text-2xl line-clamp-2 leading-tight">
            {auction.title}
          </h2>
          <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs md:text-md font-medium">
            {auction.category}
          </span>
        </div>
      </div>

      {/* CardContent */}
      <div className=" px-6 py-5">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm md:text-md ">Current Bid</span>
            <span className="text-xl font-bold text-green-600">
              R{auction.currentBid}
            </span>
          </div>
          <div className="flex justify-between items-center text-sm md:text-md ">
            <span>Started at R{auction.startingBid}</span>
            <div className="flex items-center gap-1">
              <User className="w-3 h-3" />
              <span>{auction.bidCount} bids</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm md:text-md ">Time left</span>
            <span
              className={`text-sm md:text-md  font-medium ${
                isEndingSoon ? "text-orange-600" : ""
              }`}
            >
              {auction.timeLeft}
            </span>
          </div>
        </div>
      </div>

      {/* CardFooter */}
      <div className="pt-3 px-6 py-5 border-t bg-gray-50/50">
        <div className="flex items-center gap-3 w-full">
          <div className="h-6 w-6 rounded-full bg-black/20 text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
            {auction.sellerAvatar ? (
              <img
                src={auction.sellerAvatar}
                alt={auction.seller}
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              sellerInitials
            )}
          </div>
          <span className="text-sm flex-1 font-medium">{auction.seller}</span>
          <Link
            to={`/auction/${auction.id}`}
            className="px-3 py-2 flex rounded-2xl text-sky-100 items-center justify-center bg-blue-600 hover:bg-blue-700 shadow-md"
          >
            <span className="text-xs">Bid Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuctionCard;
