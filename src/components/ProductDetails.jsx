import React from "react";
import products from "../Data/products";
import { useParams } from "react-router-dom";
import ProductsHeader from "./ProductsHeader";
import { Heart, Share2 } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <div>
        <ProductsHeader />

        <div className="grid grid-cols-2 p-10">
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full rounded-xl"
            />
          </div>

          <div className="p-10">
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

            

            <p className="mt-4 text-lg">price: R{product.price}</p>
            <p className="mt-2 text-sm text-gray-600">{product.condition}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
