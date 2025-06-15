import React, { useState, createContext, useContext } from "react";
import { useAuth } from "./AuthContext";


// Created context
const CartContext = createContext();


// Created provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useAuth();

  const addToCart = async (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      alert("Item is already in your cart.");
      return;
    }

    setCartItems([...cartItems, { ...product, quantity: 1 }]);

    // Send to Backend
    try {
      const res = await fetch("http://localhost/swapmeet-backend/add-to-cart.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          UserId: user?.UserId,
          ProductId: product.id,
        }),
      });

      const data = await res.json();
      if (!data.success) {
        console.warn("Server rejected cart item:", data.message);
      }
    } catch (error) {
      console.error("failed to sync with backend:", error)
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
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
