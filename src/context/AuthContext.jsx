import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("swapmeet-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Login function
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("swapmeet-user", JSON.stringify(userData));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("swapmeet-user");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("favorites");
  };

  const refreshUser = async () => {
    try {
      const stored = localStorage.getItem("swapmeet-user");
      if (!stored) return;

      const parsed = JSON.parse(stored);

      const res = await fetch(
        `swapmeet-backend.byethost12.com/get-user.php?userId=${parsed.UserId}`
      );
      const data = await res.json();

      if (data.success) {
        setUser(data.user);
        localStorage.setItem("swapmeet-user", JSON.stringify(data.user));
      }
    } catch (err) {
      console.error("Failed to refresh user:", err);
    }
  };

  // context value
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoading, refreshUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// hook to use context
export const useAuth = () => useContext(AuthContext);
