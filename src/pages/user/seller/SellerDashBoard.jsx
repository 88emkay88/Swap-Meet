import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Package, Star, PlusCircle, PhoneCall } from "lucide-react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa";
import Footer from "../../../components/Footer";
import SellersSideBar from "./SellersSideBar";
import { useAuth } from "../../../context/AuthContext";
import MobileSellerMenu from "./MobileSellerMenu";

const SellerDashboard = () => {
  const [listingCount, setListCount] = useState(0);
  const [SellerRating, setSellerRating] = useState("");
  const [userItems, setUserItems] = useState([]);
  const { user } = useAuth();
  const [Completion, setCompletion] = useState({ percent: 0, step: [] });

  useEffect(() => {
    if (!user) return;

    const steps = [];

    if (!user.Avatar) steps.push("Add profile picture");
    if (!user.Email) steps.push("Verify email address");
    if (!user.PhoneNumber) steps.push("Add phone number");
    if (!user.Address) steps.push("Add Address");

    const totalSteps = 4;
    const completed = totalSteps - steps.length;
    const percent = Math.round((completed / totalSteps) * 100);

    setCompletion({ percent, steps });
  }, [user]);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await fetch(
        `https://http://swapmeet.liveblog365.com/api/seller-dashboard.php?sellerId=${user.sellerProfile.sellerID}`
      );

      const data = await res.json();

      if (data.success) {
        setListCount(data.listingCount);
      }
    };
    if (user) fetchListings();
  }, [user]);

  useEffect(() => {
    const fetchSellerData = async () => {
      if (!user) return;

      const res = await fetch(
        `https://http://swapmeet.liveblog365.com/api/seller-dashboard.php?sellerId=${user.sellerProfile.sellerID}`
      );

      const data = await res.json();

      if (data.success) {
        setListCount(data.listingCount);
        setSellerRating(data.sellerProfile?.SellerRating ?? "0.00");
      }
    };

    fetchSellerData();
  }, [user]);

  useEffect(() => {
    if (!user) return;

    const fetchUserItems = async () => {
      try {
        const res = await fetch(
          `https://http://swapmeet.liveblog365.com/api/get-seller-products.php?sellerId=${user.sellerProfile.sellerID}`
        );
        const data = await res.json();
        if (data.success) {
          setUserItems(data.products);
          console.log("products: ", data.products);
        }
      } catch (err) {
        console.error("Error fetching seller listings", err);
      }
    };

    fetchUserItems();
  }, [user]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="py-10">
      <MobileSellerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <SellersSideBar />
        </div>
        <div className="space-y-8 col-span-3 p-10">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {user.FirstName}!</h1>
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
              <div className="text-2xl font-bold">{listingCount}</div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <span className="text-sm font-medium">Rating</span>
                <Star className="h-4 w-4 " />
              </div>
              <div className="text-2xl font-bold">
                {SellerRating === "0.00" ? (
                  <p>No ratings yet</p>
                ) : (
                  <p>{SellerRating}</p>
                )}
              </div>
            </div>
          </div>

          {/* Your Items */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">Your Items</h2>
                    <p className="text-sm ">Items you've listed for swapping</p>
                  </div>
                  <Link
                    to="/seller-dashboard/listings"
                    className="text-blue-500 text-sm"
                  >
                    View All
                  </Link>
                </div>
                {userItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {userItems.map((item) => (
                      <div
                        key={item.ProductId}
                        className="border rounded-2xl border-gray-300/75 p-4"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-40 object-cover rounded-lg mb-2"
                        />
                        <h3 className="font-medium text-base">{item.title}</h3>
                        <p className="text-sm ">{item.Location}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="max-w-3xl h-full">
                    <p>No Items Posted</p>
                  </div>
                )}
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
                    <span className="font-medium">{Completion.percent}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-300"
                      style={{ width: `${Completion.percent}%` }}
                    />
                  </div>
                </div>
                <ul className="space-y-2 text-sm mb-4">
                  <Link
                    to="/seller-dashboard/profile"
                    className="flex items-center"
                  >
                    <AiOutlineUserAdd />
                    Add profile picture
                  </Link>
                  <Link
                    to="/seller-dashboard/profile"
                    className="flex items-center"
                  >
                    <MdOutlineMail />
                    Verify email address
                  </Link>
                  <Link
                    to="/seller-dashboard/profile"
                    className="flex items-center"
                  >
                    <PhoneCall className="w-5 " />
                    Add phone number
                  </Link>
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
    </div>
  );
};

export default SellerDashboard;
