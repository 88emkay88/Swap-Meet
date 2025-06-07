import { useState } from "react";
import { Link } from "react-router-dom";
import { Package, Star, PlusCircle, PhoneCall } from "lucide-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import Footer from "../../../components/Footer";
import SellersSideBar from "./SellersSideBar";

const userItems = [
  {
    id: "user-item1",
    title: "Vintage Film Camera",
    image:
      "https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Electronics",
    condition: "Good",
    location: "Seattle, WA",
    userName: "John Doe",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "user-item2",
    title: "Leather Messenger Bag",
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Accessories",
    condition: "Like New",
    location: "Seattle, WA",
    userName: "John Doe",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];



const SellerDashboard = () => {
  const [activeListings] = useState(2);
  const [rating] = useState("4.8/5");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <SellersSideBar />
        <div className="space-y-8 col-span-3 p-10">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome, John!</h1>
              <p className="">
                Manage your listings and grow your swap business.
              </p>
            </div>
            <Link
              to="/seller-dashboard/post-item"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center"
            >
              <PlusCircle className="mr-2" size={18} /> Post New Item
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <span className="text-sm font-medium">Active Listings</span>
                <Package className="h-4 w-4 " />
              </div>
              <div className="text-2xl font-bold">{activeListings}</div>
              <p className="text-xs ">3 views this week</p>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <span className="text-sm font-medium">Rating</span>
                <Star className="h-4 w-4 " />
              </div>
              <div className="text-2xl font-bold">{rating}</div>
              <p className="text-xs ">Based on 12 swaps</p>
            </div>
          </div>

          {/* Your Items and Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Your Items</h2>
                    <p className="text-sm ">
                      Items you've listed for swapping
                    </p>
                  </div>
                  <Link to="/seller-dashboard/listings" className="text-blue-500 text-sm">
                    View All
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {userItems.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-2xl border-gray-300/75 p-4"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-40 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-medium text-base">{item.title}</h3>
                      <p className="text-sm ">
                        {item.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6 h-4/7">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <Link
                  to="/seller-dashboard/post-item"
                  className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded mb-2"
                >
                  <PlusCircle className="inline-block mr-2" size={16} /> Post
                  New Item
                </Link>
                <Link
                  to="/products"
                  className="block w-full border border-gray-300 text-center py-2 rounded mb-2"
                >
                  Browse Items
                </Link>
                <Link
                  to="/seller-dashboard/listings"
                  className="block w-full border border-gray-300 text-center py-2 rounded"
                >
                  View My Listings
                </Link>
              </div>

              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
                <h2 className="text-lg font-semibold">Profile Completion</h2>
                <p className="text-sm  mb-4">
                  Complete your profile to increase swap chances
                </p>
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="">Progress</span>
                    <span className="font-medium">70%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                    <div className="h-full w-[70%] rounded-full bg-blue-500" />
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <li className="flex items-center">
                    <AiOutlineUserAdd />
                    Add profile picture
                  </li>
                  <li className="flex items-center">
                    <MdOutlineMail />
                    Verify email address
                  </li>
                  <li className="flex items-center">
                    <PhoneCall className="w-5 " />
                    Add phone number
                  </li>
                  <li className="flex items-center">
                    <FaClipboardCheck />
                    Complete preferences
                  </li>
                </ul>
                <Link
                  to="/seller-dashboard/profile"
                  className="block w-full text-blue-500 text-center text-sm"
                >
                  Complete Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SellerDashboard;
