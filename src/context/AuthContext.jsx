import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is stored in local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("swapmeet-user");
    if (storedUser) setUser(JSON.parse(storedUser));
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
  };

  // context value
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook to use context
export const useAuth = () => useContext(AuthContext);
