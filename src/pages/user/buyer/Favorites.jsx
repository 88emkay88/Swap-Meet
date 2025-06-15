import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react";
import { useFavorites } from "../../../context/FavoritesContext";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import BuyerSideBar from "./BuyerSideBar";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { user, Logout } = useAuth();

  const getUserInitials = (user) => {
    if (!user?.FirstName || !user?.LastName) return "";
    return (
      user.FirstName.charAt(0).toUpperCase() +
      user.LastName.charAt(0).toUpperCase()
    );
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <BuyerSideBar />
        {/* Content */}
        <div className="col-span-3 p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Favorites</h1>
              <p className="text-gray-500">Items you've saved for later</p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
            >
              <Search className="mr-2" size={18} /> Browse More Items
            </Link>
          </div>

          {favorites.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="relative border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-t-2xl"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500">
                        {item.category} · {item.condition}
                      </p>
                      <p className="text-sm text-gray-400">{item.location}</p>
                    </div>
                    <div className="flex items-center mt-4">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.UserName}
                          className="h-10 w-10 rounded-full border"
                        />
                      ) : (
                        <div className=" flex items-center justify-center border w-10 h-10 rounded-full">
                          {getUserInitials(item.userName)}
                        </div>
                      )}
                      <span className="text-sm text-gray-700">
                        {item.userName}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => toggleFavorite(item)}
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 p-2 rounded-full"
                  >
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 border rounded-2xl border-gray-300/75 text-center space-y-4">
              <Heart className="h-12 w-12 text-gray-400 mx-auto" />
              <h2 className="text-xl font-semibold">No favorites yet</h2>
              <p className="text-sm text-gray-500">
                Start browsing items and save the ones you're interested in
              </p>
              <Link
                to="/products"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <Search className="mr-2" size={16} /> Browse Items
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Favorites;
