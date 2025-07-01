import React, { useState, createContext, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

// Created context
const CartContext = createContext();

// Created provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();

  // Load cart from loacalStroage
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to local storage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product) => {
    const exists = cartItems.find(
      (item) => item.ProductId === product.ProductId
    );
    if (exists) {
      alert("Item is already in your cart.");
      return;
    }

    setCartItems([...cartItems, { ...product, quantity: 1 }]);

    // Send to Backend
    try {
      const res = await fetch(
        `${"https://swapmeet.liveblog365.com/api"}/add-to-cart.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            UserId: user?.UserId,
            ProductId: product.ProductId,
          }),
        }
      );

      const data = await res.json();
      if (!data.success) {
        console.warn("Server rejected cart item:", data.message);
      }
    } catch (error) {
      console.error("failed to sync with backend:", error);
    }
  };

  const removeFromCart = async (id) => {
    setCartItems(cartItems.filter((item) => item.ProductId !== id));

    try {
      await fetch(
        `${"https://swapmeet.liveblog365.com/api"}/remove-from-cart.php`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            UserId: user?.UserId,
            ProductId: id,
          }),
        }
      );
    } catch (err) {
      console.error("Fail to remove item from server:", err);
    }
  };

  const clearCart = async () => {
    setCartItems([]);

    try {
      await fetch(`${"https://swapmeet.liveblog365.com/api"}/clear-cart.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: user?.UserId }),
      });
    } catch (err) {
      console.error("Failed to clear cart on server:", err);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a hook to use the context
export const useCart = () => useContext(CartContext);
