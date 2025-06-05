import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import bestSellerItems from '../../Data/BestSellerItems';
import { set } from 'date-fns';
import ProductsHeader from '../Products/ProductsHeader';
import { ArrowLeft } from 'lucide-react';

const BestSellerDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null)
  const [selectedImage, setSelectedIamge] = useState(0)
  const [isWishListed, setIsWishListed] = useState(false)

  useEffect(() => {
    const foundItem = bestSellerItems.find(i => i.id === id);
    setItem(foundItem || null);
  }, [id])

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Best Seller Not Found</h1>
          <Link to="/bestsellers">
            <button className="h-10 px-4 py-2 bg-blue-600 text-blue-200">Back to Best Sellers</button>
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
  }

  return (
    <div className="max-w-screen max-h-screen">
      <ProductsHeader />

      {/* Container */}
      <div className="px-4 py-8 mx-auto">

        {/* Back Button */}
        <div className="mx-3 my-5 w-1/2 h-1/2  md:w-2/10 md:h-2/7 border py-0.5 px-1.5 md:py-2 md:px-5 hover:bg-gray-200/46 transition-colors duration-300 rounded-2xl">
          <Link
            className="flex gap-3 items-center justify-center"
            to="/bestseller"
          >
            <ArrowLeft />
            <span>Back To Best Seller</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BestSellerDetails