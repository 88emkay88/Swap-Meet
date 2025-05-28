import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  title,
  image,
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
  
  const conditionColor = {
    New: "bg-green-300",
    Excellent: "bg-teal-300",
    Good: "bg-amber-300",
    fair: "bg-yellow-400",
    poor: "bg-red-300",
  }[condition] || "bg-gray-300"

  return (
    <Link to={`/product/${id}`}>
      <div
        className={`bg-white rounded-lg shadow hover:shadow-xl overflow-hidden ${className}`}
      >
        {/* Image with condition badge */}
        <div className="relative aspect-square overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
          <div className={`text-blue-800 font-bold absolute top-2 right-2 ${conditionColor}  text-xs px-2 py-1 rounded-full`}>
            {condition}
          </div>
        </div>

        {/* Title & Info */}
        <div className="p-4">
          <h3 className="font-medium text-lg truncate">{title}</h3>
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
    </Link>
  );
};

export default ProductCard;
