import { Heart, Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  image,
  price,
  rating,
  category,
  condition,
  location,
  userName,
  userAvatar,
  className = "",
}) => {
  const userInitails = userName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const conditionColor =
    {
      New: "bg-green-300",
      Excellent: "bg-teal-300",
      Good: "bg-amber-300",
      fair: "bg-yellow-400",
      Used: "bg-orange-300",
      poor: "bg-red-300",
    }[condition] || "bg-gray-300";

  return (
    <div>
      <div
        className={`bg-white rounded-lg shadow hover:shadow-xl overflow-hidden ${className}`}
      >
        {/* Image with condition badge */}
        <div className="relative aspect-square overflow-hidden">
          <Link to={`/products/${id}`}>
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
            />
          </Link>
          <div
            className={`text-blue-800 font-bold absolute top-2 right-2 ${conditionColor}  text-xs px-2 py-1 rounded-full`}
          >
            {condition}
          </div>

          <button className="absolute top-2 left-2 cursor-pointer">
            <Heart className="hover:text-red-600" />
          </button>
        </div>

        {/* Title & Info */}
        <div className="p-4 relative">
          <h3 className="font-medium text-lg truncate">{title}</h3>
          <p className="font-semibold text-lg">R{price}</p>
          <div className="flex space-x-1 mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-4 w-4 ${
                  star <= rating
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-sky-700"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-5 bg-sky-500 md:bg-white text-sm -translate-y-6.5 md:translate-y-0 md:hover:bg-sky-200 px-3 py-1 rounded-full">
            <button>Add To Cart</button>
          </div>

          <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
            <span>{category}</span>
            <span>•</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Footer with user avatar */}
        <div className="flex items-center gap-2 px-4 pt-2 pb-4 border-t">
          <div className="h-6 w-6 rounded-full bg-black/20 text-white flex items-center justify-center text-xs font-semibold overflow-hidden">
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userName}
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              userInitails
            )}
          </div>
          <span className="text-sm">{userName}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
