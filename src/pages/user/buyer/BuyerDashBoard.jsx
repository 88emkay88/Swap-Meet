import { Link } from "react-router-dom";
import { Heart, Search, TrendingUp } from "lucide-react";
import BuyerSideBar from "./BuyerSideBar";
import { useAuth } from "../../../context/AuthContext";
import { useFavorites } from "../../../context/FavoritesContext";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import MobileBuyerMenu from "./MobileBuyerMenu";

const BuyerDashBoard = () => {
  const { user } = useAuth();
  const { favorites } = useFavorites();
  const [nearbyItems, setNearbyItems] = useState([]);

  useEffect(() => {
    const fetchNearby = async () => {
      if (!user?.Location) return;

      try {
        const res = await fetch(
          `${"https://swapmeet-backend.iceiy.com/api"}/get-nearby-products.php?Location=${encodeURIComponent(
            user.Address
          )}`
        );

        const data = await res.json();

        if (data.success) setNearbyItems(data.products);
      } catch (err) {
        console.error("Failed to load nearby listings", err);
      }
    };

    fetchNearby();
  }, [user]);

  return (
    <div className="py-10">
      <MobileBuyerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <BuyerSideBar />
        </div>
        <div className="col-span-3 p-10 space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user.FirstName}!</h1>
              <p className="text-gray-500">
                Discover amazing items to swap in your area.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              <Search className="mr-2" size={18} /> Browse Items
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Saved Favorites</span>
                <Heart className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">{favorites.length}</div>
              <p className="text-xs text-gray-500">
                Items you're interested in
              </p>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/*  Items Near you */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">Items near You</h2>
                    <p className="text-sm text-gray-500">
                      In your location : {user?.Location}
                    </p>
                  </div>
                  <Link
                    to="/products"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    Browse More
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {nearbyItems.length > 0 ? (
                    nearbyItems.map((item) => (
                      <Link
                        key={item.id}
                        to={`/item/${item.ProductId}`}
                        className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                      >
                        <img
                          src={item.image}
                          alt={item.Name}
                          className="w-full h-48 object-cover rounded-t-2xl"
                        />
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <h3 className="text-lg font-semibold">
                              {item.Name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {item.Category} · {item.Condition}
                            </p>
                            <p className="text-sm text-gray-400">
                              {item.location}
                            </p>
                          </div>
                          <div className="flex items-center mt-4">
                            <img
                              src={item.userAvatar}
                              alt={item.userName}
                              className="w-8 h-8 rounded-full mr-2"
                            />
                            <span className="text-sm text-gray-700">
                              {item.userName}
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="w-full h-full">
                      <p>No Items Near you yet.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-5 mb-5">
              <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-4">
                  <Link
                    to="/products"
                    className="w-full block text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <Search className="inline mr-2" size={16} /> Browse Items
                  </Link>
                  <Link
                    to="/buyer-dashboard/favorites"
                    className="w-full block text-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    <Heart className="inline mr-2" size={16} /> View Favorites
                  </Link>
                  <Link
                    to="/buyer-dashboard/profile"
                    className="w-full block text-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>

              {/* Become a Seller */}
              <div className="p-5 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 md:h-1/3">
                <h2 className="text-lg font-semibold mb-1">Start Selling</h2>
                <p className="text-sm text-gray-500 mb-1">
                  Have items you want to swap? Become a seller!
                </p>
                <button
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => (window.location.href = "/register")}
                >
                  Become a Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerDashBoard;
