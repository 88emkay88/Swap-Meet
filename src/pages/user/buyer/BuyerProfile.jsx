import { useState, useEffect } from "react";
import {
  Camera,
  CheckCircle,
  Edit,
  Star,
  MapPin,
  Calendar,
} from "lucide-react";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { TbWorldSearch } from "react-icons/tb";
import BuyerSideBar from "./BuyerSideBar";
import Footer from "../../../components/Footer";

const BuyerProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "https://randomuser.me/api/portraits/men/32.jpg"
  );
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "John Doe",
    email: "john.doe@example.com",
    phone: "(081) 123-4567",
    location: "Mindrand, Johnannesberg",
    bio: "Avid collector and swap enthusiast. Love finding unique items and giving old things new life. Looking for vintage tech, cameras, and vinyl records.",
    preferences: "Electronics, Vintage Items, Photography Equipment",
    instagram: "@johndoe",
    twitter: "@johndoe",
    website: "johndoe.com",
  });

  // Simple toast with Tailwind, shown for 3s
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUploadImage = () => {
    const randomId = Math.floor(Math.random() * 100);
    const gender = Math.random() > 0.5 ? "men" : "women";
    setProfileImage(
      `https://randomuser.me/api/portraits/${gender}/${randomId}.jpg`
    );
    setToast({
      title: "Profile photo updated",
      description: "Your profile photo has been updated successfully.",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setToast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
      setIsEditing(false);
    }, 500);
  };

  const ratings = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Great swap partner! Very responsive and the item was exactly as described.",
      date: "2 months ago",
    },
    {
      name: "Michael Chen",
      rating: 4,
      comment: "Good experience overall. Punctual and reliable.",
      date: "3 months ago",
    },
    {
      name: "Emma Wilson",
      rating: 5,
      comment: "Amazing! Would definitely swap with John again.",
      date: "4 months ago",
    },
  ];

  const badges = [
    {
      name: "Verified User",
      icon: CheckCircle,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Quick Responder",
      icon: Star,
      color: "bg-yellow-100 text-yellow-800",
    },
    { name: "Top Swapper", icon: Star, color: "bg-blue-100 text-blue-800" },
  ];

  // Simple tabs state:
  const [tab, setTab] = useState("profile");

  return (
    <div className="max-w-full py-10">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <BuyerSideBar />
        <div className=" col-span-3 mx-auto p-10">
          {/* Toast */}
          {toast && (
            <div className="fixed top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow-lg z-50">
              <strong>{toast.title}</strong>
              <p className="text-sm">{toast.description}</p>
            </div>
          )}

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
            <div className="relative">
              <div className="rounded-full overflow-hidden h-32 w-32 border border-gray-300/75">
                <img
                  src={profileImage}
                  alt={formData.displayName}
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                onClick={handleUploadImage}
                className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                aria-label="Upload Image"
              >
                <Camera size={16} />
              </button>
            </div>

            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{formData.displayName}</h1>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                    <MapPin size={16} />
                    <span>{formData.location}</span>
                    <span>•</span>
                    <Calendar size={16} />
                    <span>Member since May 2022</span>
                  </div>
                </div>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 border border-gray-400 rounded px-3 py-1 hover:bg-gray-100 transition"
                  >
                    <Edit size={16} /> Edit Profile
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${badge.color}`}
                    >
                      <Icon size={14} />
                      {badge.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="w-full mb-6 border-b border-gray-300/75">
            <nav className="flex justify-around md:justify-start md:gap-8">
              {["profile", "ratings", "stats"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`py-2 px-4 font-semibold border-b-2 ${
                    tab === t
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {t === "profile"
                    ? "Profile"
                    : t === "ratings"
                    ? "Ratings & Reviews"
                    : "Stats"}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div>
            {tab === "profile" && (
              <>
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Display Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="displayName"
                          className="block font-medium text-gray-700"
                        >
                          Display Name
                        </label>
                        <input
                          id="displayName"
                          value={formData.displayName}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Email (disabled) */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          disabled
                          className="w-full bg-gray-100 border border-gray-300 rounded px-3 py-2 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-500">
                          Email cannot be changed
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block font-medium text-gray-700"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      {/* Location */}
                      <div className="space-y-2">
                        <label
                          htmlFor="location"
                          className="block font-medium text-gray-700"
                        >
                          Location
                        </label>
                        <input
                          id="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div className="space-y-2">
                      <label
                        htmlFor="bio"
                        className="block font-medium text-gray-700"
                      >
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      />
                    </div>

                    {/* Preferences */}
                    <div className="space-y-2">
                      <label
                        htmlFor="preferences"
                        className="block font-medium text-gray-700"
                      >
                        Preferences
                      </label>
                      <input
                        id="preferences"
                        value={formData.preferences}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Social Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="instagram"
                          className="font-medium text-gray-700 flex items-center gap-1"
                        >
                          <FaInstagram /> Instagram
                        </label>
                        <input
                          id="instagram"
                          value={formData.instagram}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="twitter"
                          className="font-medium text-gray-700 flex items-center gap-1"
                        >
                          <FaXTwitter /> Twitter
                        </label>
                        <input
                          id="twitter"
                          value={formData.twitter}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="website"
                          className="font-medium text-gray-700 flex items-center gap-1"
                        >
                          <TbWorldSearch /> Website
                        </label>
                        <input
                          id="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h2 className="text-xl font-semibold mb-2">About Me</h2>
                    <p className="text-gray-700 mb-4">{formData.bio}</p>

                    <h2 className="text-xl font-semibold mb-2">Preferences</h2>
                    <p className="text-gray-700 mb-6">{formData.preferences}</p>

                    <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                    <ul className="space-y-1 text-gray-700 mb-6">
                      <li>
                        <strong>Email:</strong> {formData.email}
                      </li>
                      <li>
                        <strong>Phone:</strong> {formData.phone}
                      </li>
                      <li>
                        <strong>Location:</strong> {formData.location}
                      </li>
                      <li>
                        <strong>Instagram:</strong> {formData.instagram}
                      </li>
                      <li>
                        <strong>Twitter:</strong> {formData.twitter}
                      </li>
                      <li>
                        <strong>Website:</strong> {formData.website}
                      </li>
                    </ul>
                  </>
                )}
              </>
            )}

            {tab === "ratings" && (
              <div className="grid md:grid-cols-3 gap-6">
                {ratings.map(({ name, rating, comment, date }, idx) => (
                  <div
                    key={idx}
                    className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-full"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="rounded-full bg-gray-200 h-10 w-10 flex items-center justify-center text-gray-600 font-semibold uppercase">
                        {name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-gray-500">{date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={
                            i < rating ? "text-yellow-400" : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 flex-grow">{comment}</p>
                  </div>
                ))}
              </div>
            )}

            {tab === "stats" && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Statistics</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">120</h3>
                    <p className="text-gray-600">Swaps Completed</p>
                  </div>
                  <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">4.8/5</h3>
                    <p className="text-gray-600">Average Rating</p>
                  </div>
                  <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6 text-center">
                    <h3 className="text-3xl font-bold mb-2">36</h3>
                    <p className="text-gray-600">Active Listings</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerProfile;
