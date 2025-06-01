import React, { useState } from "react";
import products from "../../Data/products";
import { useParams } from "react-router-dom";
import ProductsHeader from "./ProductsHeader";
import {
  Clock7,
  Heart,
  MapPin,
  MessageCircleQuestion,
  Share2,
  Star,
} from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductTabs from "./ProductTabs";
import { TbShoppingBagPlus } from "react-icons/tb";
import Footer from "../../components/Footer";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const userInitails = product.seller.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const [mainImage, setMainImage] = useState(
    product?.images?.[0] || product.images
  );

  if (!product) return <p>Product not found.</p>;

  

  return (
    <>
      <div>
        <ProductsHeader />

        <div>
          <Breadcrumbs currentPage={product.name} category={product.category} />
        </div>

        <div className="grid grid-cols-2 p-10">
          {/* Main Image Display */}
          <div className="h-150 p-50">
            <img
              src={mainImage}
              alt={product.name}
              className="shadow-2xl rounded-4xl w-5/6 h-100"
            />

            {/* Thumbnail selectors */}
            <div className="flex gap-2 mt-4">
              {(product.images || [product.image]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`W-20 h-20 rounded-3xl cursor-point ${
                    mainImage === img ? "border-4 border-sky-500" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-10 space-y-10">
            <div>
              {/* Heading & Buttons */}
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                <div className="flex justify-between space-x-7 items-center">
                  <button>
                    <Heart />
                  </button>

                  <button>
                    <Share2 />
                  </button>
                </div>
              </div>

              {/* Location & Date Posted */}
              <div className="flex justify-start space-x-10 text-gray-500">
                <div className="flex">
                  <MapPin />
                  {product.location}
                </div>
                <div className="flex">
                  <Clock7 />
                  {product.datePosted}
                </div>
              </div>
            </div>

            {/* Condition */}
            <div className="p-10 bg-sky-600 rounded-2xl text-sky-50">
              <h2 className="text-2xl font-semibold">Condition</h2>
              <p className="text-lg">{product.condition}</p>
            </div>

            {/* Product tabs */}
            <ProductTabs
              details={product.details}
              description={product.description}
              price={product.price}
            />

            {/* Seller card */}
            <div className=" grid space-y-5 p-8 border-1 border-gray-300 rounded-2xl shadow">
              {/* Seller Details */}
              <div className="flex items-center">
                {product.seller.avatar !== "" ? (
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="h-15 w-15 border object-cover rounded-full"
                  />
                ) : (
                  <div className="flex mr-2 border-2 w-10 h-10 rounded-full items-center justify-center">
                    <span>{userInitails}</span>
                  </div>
                )}

                <div className="space-y-1 ml-2 grid">
                  <h2 className="text-2xl ">{product.seller.name}</h2>
                  <div className="flex space-x-2">
                    <p className="flex items-center space-x-2">
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <span>{product.seller.sellerRating}</span>
                    </p>
                    <span>•</span>
                    <p>Memeber since {product.seller.joinDate}</p>
                  </div>
                </div>
              </div>

              {/* response Rate & Completed Sales */}
              <div className="flex justify-between">
                <div>
                  <h3 className="text-xl">Response Rate</h3>
                  <p className="text-center font-bold">
                    %{product.seller.responseRate}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl">Completed Sales</h3>
                  <p className="text-center font-bold">
                    {product.seller.completedSales}
                  </p>
                </div>
              </div>

              {/* Message About Item */}
              <button className="flex justify-center rounded-2xl space-x-4 p-3 bg-sky-600 hover:bg-sky-400 cursor-pointer  text-sky-100">
                <span>
                  <MessageCircleQuestion />
                </span>
                <p>Message About This Item</p>
              </button>
            </div>

            <button className="flex items-center space-x-2 justify-center w-full bg-sky-600 p-5 text-sky-100 rounded-2xl hover:bg-sky-400 cursor-pointer">
              <span>
                <TbShoppingBagPlus size={35} />
              </span>
              <p>Add to cart</p>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProductDetails;
