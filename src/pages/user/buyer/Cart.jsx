import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";
import { Trash2, ArrowLeft, MessageSquare, ShoppingBag } from "lucide-react";

import BuyerSideBar from "./BuyerSideBar";
import Footer from "../../../components/Footer";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-20 max-h-screen w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <BuyerSideBar />
          <div className="mx-auto text-center col-span-3">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-500 mb-8">
              Start browsing to add items to your cart for potential swaps.
            </p>
            <Link
              to="/products"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Browse Items
            </Link>
          </div>
            </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <BuyerSideBar />

        {/* Content */}
        <div className="mx-auto px-4 col-span-3">
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/products"
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600"
            >
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-gray-500">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"} saved
                for potential swaps
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items */}
            <div className="lg:w-2/3 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6"
                >
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/product/${item.id}`}
                        className="font-medium text-lg hover:text-blue-500 block truncate"
                      >
                        {item.title}
                      </Link>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <span>{item.category}</span>
                        <span>•</span>
                        <span>{item.condition}</span>
                        <span>•</span>
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                          {item.userName
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm">{item.userName}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button className="text-sm border border-gray-300 rounded px-3 py-1 flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </button>
                      <button
                        className="text-sm border border-gray-300 rounded px-3 py-1 flex items-center gap-1"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:w-1/3 h-3/4">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="p-6 border-b">
                  <h2 className="text-lg font-semibold">Cart Summary</h2>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between">
                    <span>Total Items:</span>
                    <span className="font-medium">{cartItems.length}</span>
                  </div>
                  <div className="border-t pt-4 space-y-3">
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded flex justify-center items-center gap-2 hover:bg-blue-600">
                      <ShoppingBag className="w-4 h-4" />
                      Proceed to Checkout
                    </button>
                    <button className="w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50">
                      Contact All Sellers
                    </button>
                    <button
                      className="w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50"
                      onClick={clearCart}
                    >
                      Clear Cart
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    Ready to start swapping? Complete checkout to send requests
                    to all sellers.
                  </p>
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

export default Cart;
