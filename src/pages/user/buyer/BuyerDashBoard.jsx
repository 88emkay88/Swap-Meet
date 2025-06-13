import { Link } from "react-router-dom";
import { Heart, Search, TrendingUp } from "lucide-react";
import BuyerSideBar from "./BuyerSideBar";

import Footer from "../../../components/Footer";

const suggestedItems = [
  {
    id: "suggested1",
    title: "Wireless Earbuds",
    image:
      "https://images.unsplash.com/photo-1605464315542-bda3e2f4e605?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Electronics",
    condition: "Like New",
    location: "Portland, OR",
    userName: "Emma Wilson",
    userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "suggested2",
    title: "Vintage Vinyl Records",
    image:
      "https://images.unsplash.com/photo-1603048588665-791ca8aea617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Music",
    condition: "Good",
    location: "Chicago, IL",
    userName: "David Parker",
    userAvatar: "https://randomuser.me/api/portraits/men/55.jpg",
  },
];

const BuyerDashBoard = () => {
  return (
      <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <BuyerSideBar />

        <div className="col-span-3 p-10 space-y-8">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome, John!</h1>
              <p className="text-gray-500">
                Discover amazing items to swap in your area.
              </p>
            </div>
            <Link
              to="/browse"
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
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-gray-500">
                Items you're interested in
              </p>
            </div>
            <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Swap Interests</span>
                <TrendingUp className="h-4 w-4 text-gray-400" />
              </div>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-gray-500">Active swap conversations</p>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Suggested Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-lg font-semibold">Suggested For You</h2>
                    <p className="text-sm text-gray-500">
                      Based on your interests and location
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
                  {suggestedItems.map((item) => (
                    <Link
                      key={item.id}
                      to={`/item/${item.id}`}
                      className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-t-2xl"
                      />
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.category} · {item.condition}
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
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Actions */}
            <div className="space-y-5 mb-5">
              <div className="p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="space-y-4">
                  <Link
                    to="/browse"
                    className="w-full block text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    <Search className="inline mr-2" size={16} /> Browse Items
                  </Link>
                  <Link
                    to="/buyer/favorites"
                    className="w-full block text-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    <Heart className="inline mr-2" size={16} /> View Favorites
                  </Link>
                  <Link
                    to="/buyer/profile"
                    className="w-full block text-center px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
                  >
                    Update Profile
                  </Link>
                </div>
              </div>

              {/* Become a Seller */}
              <div className="p-5 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-1/3">
                <h2 className="text-lg font-semibold mb-1">Start Selling</h2>
                <p className="text-sm text-gray-500 mb-1">
                  Have items you want to swap? Become a seller!
                </p>
                <button
                  className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() =>
                    (window.location.href = "/auth/signup?type=seller")
                  }
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
