import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductsHeader from "./ProductsHeader";
import { Clock7, Heart, MapPin, Share2, Star } from "lucide-react";
import Breadcrumbs from "../../components/Breadcrumbs";
import ProductTabs from "./ProductTabs";
import { TbShoppingBagPlus } from "react-icons/tb";
import Footer from "../../components/Footer";
import { formatDistanceToNow } from "date-fns";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useFavorites } from "../../context/FavoritesContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const { toggleFavorite, isFavorite } = useFavorites();
  const [products, setProducts] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/get-all-products.php`
        );
        const data = await res.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching products", err);
      }
    };

    fetchProducts();
  }, []);

  const product = products.find((p) => p.ProductId === parseInt(id));

  useEffect(() => {
    if (product) {
      setMainImage(product.mainImage || product.images?.[0] || "");
    }
  }, [product]);

  if (!product) return <p>Product not found.</p>;

  const userInitails = product?.sellerName
    .split(" ")
    .map((n) => n[0])
    .join("");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <ProductsHeader />

        <div>
          <Breadcrumbs
            currentPage={product.title}
            category={product.category}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Image Display */}
          <div className="space-y-4 p-10">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-md">
              <img
                src={mainImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnail selectors */}
            <div className="flex gap-2 mt-4">
              {(product.images || [product.image]).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 rounded-md overflow-hidden border ${
                    mainImage === img ? "border-blue-500" : "border-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="md:p-10 p-8 space-y-10">
            <div>
              {/* Heading & Buttons */}
              <div className="flex justify-between items-center mb-3">
                <h1 className="md:text-3xl text-xl font-bold">
                  {product.title}
                </h1>

                <div className="flex justify-between space-x-3 md:space-x-7 items-center ">
                  {user ? (
                    user.role === "buyer" && (
                      <button
                        onClick={() => {
                          toggleFavorite(product);
                        }}
                        className=" cursor-pointer"
                      >
                        <Heart
                          className={`transition ${
                            isFavorite(id)
                              ? "fill-red-600 text-red-600"
                              : "hover:text-red-600"
                          }`}
                        />
                      </button>
                    )
                  ) : (
                    <button
                      title="Favorites"
                      onClick={() => alert("Sign in to an account")}
                    >
                      <Heart />
                    </button>
                  )}

                  <button>
                    <Share2 />
                  </button>
                </div>
              </div>

              {/* Location & Date Posted */}
              <div className="flex justify-start space-x-10 text-gray-500">
                <div className="flex text-sm md:text-lg">
                  <MapPin />
                  {product.location}
                </div>
                <div className="flex items-center text-xs md:text-md md:font-normal font-bold">
                  <Clock7 />
                  {formatDistanceToNow(new Date(product.dateAdded), {
                    addSuffix: true,
                  })}
                </div>
              </div>
            </div>

            {/* Condition */}
            <div className="p-10 md:w-full bg-sky-600 rounded-2xl text-sky-50">
              <h2 className="text-2xl font-semibold">Condition</h2>
              <p className="text-lg">{product.condition}</p>
            </div>

            {/* Product tabs */}
            <ProductTabs
              details={product.details}
              description={product.description}
              price={product.Price}
            />

            {/* Seller card */}
            <div className=" grid space-y-5 p-8 border-1 border-gray-300 rounded-2xl shadow">
              {/* Seller Details */}
              <div className="flex items-center">
                {product.SellerAvatar ? (
                  <img
                    src={product.SellerAvatar}
                    alt={`${product.sellerName}`}
                    className="h-15 w-15 border object-cover rounded-full"
                  />
                ) : (
                  <div className="flex mr-2 border-2 md:w-10 w-15 h-10 md:h-10 rounded-full items-center justify-center">
                    <span>{userInitails}</span>
                  </div>
                )}

                <div className="space-y-1 ml-2 grid">
                  <h2 className="md:text-2xl text-xl">{product.sellerName}</h2>
                  <div className="flex space-x-2">
                    <p className="flex items-center space-x-2">
                      <Star className="fill-yellow-300 text-yellow-300" />
                      <span>{product.sellerRating}</span>
                    </p>
                    <span>•</span>
                    <p className="md:text-md text-sm ">
                      Memeber since {formatDate(product.sellerJoinDate)}
                    </p>
                  </div>
                </div>
              </div>

              {/* response Rate & Completed Sales */}
              <div className="flex justify-between">
                <div>
                  <h3 className="md:text-xl text-sm">Response Rate</h3>
                  <p className="text-center  font-bold">
                    %{product.ResponseRate}
                  </p>
                </div>
                <div>
                  <h3 className="md:text-xl text-sm">Completed Sales</h3>
                  <p className="text-center font-bold">
                    {product.CompletedSales}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                console.log("Adding to cart:", product)
                addToCart(product);
                alert("Product added to cart");
              }}
              className="flex items-center space-x-2 justify-center w-full bg-sky-600 p-5 text-sky-100 rounded-2xl hover:bg-sky-400 cursor-pointer"
            >
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
