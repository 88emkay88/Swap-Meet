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
import { useAuth } from "../../../context/AuthContext";
import { format } from "date-fns";
import MobileBuyerMenu from "./MobileBuyerMenu";

const BuyerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: "John Doe",
    email: "john.doe@example.com",
    phone: "(081) 123-4567",
    location: "Midrand, Johnannesburg",
    bio: "Avid collector and swap enthusiast. Love finding unique items and giving old things new life. Looking for vintage tech, cameras, and vinyl records.",
    preferences: "Electronics, Vintage Items, Photography Equipment",
    instagram: "@johndoe",
    twitter: "@johndoe",
    website: "johndoe.com",
  });

  const { user } = useAuth();

  const joinDate = new Date(user.Created_at);
  const formattedDate = format(joinDate, "MMM yyyy");

  // Simple toast with Tailwind, shown for 3s
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const getUserInitials = (user) => {
    if (!user?.FirstName || !user?.LastName) return "";
    return (
      user.FirstName.charAt(0).toUpperCase() +
      user.LastName.charAt(0).toUpperCase()
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleUploadImage = () => {
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
      <MobileBuyerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <BuyerSideBar />
        </div>
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
              {user.Avatar ? (
                <div className="rounded-full overflow-hidden h-32 w-32 border border-gray-300/75">
                  <img
                    src={user.Avatar}
                    alt={`${user.FirstName} ${user.LastName}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className=" flex items-center justify-center border w-30 h-30 rounded-full">
                  {getUserInitials(user)}
                </div>
              )}
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
                  <h1 className="text-3xl font-bold">{user.UserName}</h1>
                  <div className="flex items-center justify-center md:justify-start gap-2 text-gray-500 mt-1">
                    <MapPin size={16} />
                    <span>{user?.Location || "unknown"}</span>
                    <span>•</span>
                    <Calendar size={16} />
                    <span>Member since {formattedDate}</span>
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
              {["profile"].map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`py-2 px-4 font-semibold border-b-2 ${
                    tab === t
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-blue-500"
                  }`}
                >
                  {t === "profile" ? "Profile" : "Stats"}
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
                    <p className="text-gray-700 mb-4">
                      {user?.About || "No bio"}
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Preferences</h2>
                    <p className="text-gray-700 mb-6">
                      {user?.Buyerpreferences || "No preferences."}
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Contact Info</h2>
                    <ul className="space-y-1 text-gray-700 mb-6">
                      <li>
                        <strong>Email:</strong> {user.Email}
                      </li>
                      <li>
                        <strong>Phone:</strong> {user.PhoneNumber}
                      </li>
                      <li>
                        <strong>Location:</strong> {user.Address || "unknown"}
                      </li>
                      <li>
                        <strong>Instagram:</strong>{" "}
                        {user?.InstaHandle || "unknown"}
                      </li>
                      <li>
                        <strong>Twitter:</strong>{" "}
                        {user?.TwitterHandle || "unknown"}
                      </li>
                      <li>
                        <strong>Website:</strong> {user?.Website || "unkown"}
                      </li>
                    </ul>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerProfile;
