import { useState, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Package,
  Calendar,
  Camera,
  Shield,
  Edit,
  Save,
  X,
} from "lucide-react";
import SellerSideBar from "./SellersSideBar";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import { format, formatDistanceToNowStrict } from "date-fns";

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const [profileData, setProfileData] = useState({
    firstName: "", 
    lastName: "", 
    email: "",
    phone: "", 
    businessName: "", 
    address: "", 
    bio: "",
    website: ""
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.FirstName || "",
        lastName: user.LastName || "",
        email: user.Email || "",
        phone: user.PhoneNumber || "",
        businessName: user.storeName || "",
        address: user.Location || "",
        bio: user.Bio || "",
        website: user.Website || "",
      });
    }
  }, [user]);

  const joinDate = new Date(user.Created_at);
  const formattedDate = format(joinDate, "MMM yyyy");
  const timeAgo = formatDistanceToNowStrict(joinDate);

  const handleSave = async () => {
    const updatedData = {
      UserId: user.UserId,
      FirstName: profileData.firstName,
      LastName: profileData.lastName,
      StoreName: profileData.businessName,
    };

    try {
      const res = await fetch(
        "http://localhost/swapmeet-backend/update-profile.php",
        {
          method: "POST",
          header: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );

      const text = await res.text();
      console.log("Raw response:", text);

      const data = await res.json();
      if (data.success) {
        alert("Profile updated!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <SellerSideBar />
        <div className="space-y-6 max-w-4xl col-span-3 p-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">Seller Profile</h1>
              <p className="text-gray-500">
                Manage your seller information and business details
              </p>
            </div>
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                <Edit className="mr-2 h-4 w-4 inline" />
                Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  <Save className="mr-2 h-4 w-4 inline" />
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="border px-4 py-2 rounded hover:bg-gray-100"
                >
                  <X className="mr-2 h-4 w-4 inline" />
                  Cancel
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="border h-1/2 rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300  p-6">
                <h2 className="text-xl font-semibold mb-1">
                  Basic Information
                </h2>
                <p className="text-gray-500 mb-4">
                  Your personal and contact details
                </p>

                <div className="flex items-center gap-4 mb-4">
                  <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                    {user.FirstName[0]}
                    {user.LastName[0]}
                  </div>
                  {isEditing && (
                    <button className="border px-3 py-1 rounded text-sm">
                      <Camera className="mr-2 h-4 w-4 inline" />
                      Change Photo
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "First Name", key: "firstName" },
                    { label: "Last Name", key: "lastName" },
                    { label: "Email", key: "email" },
                    { label: "Phone", key: "phone" },
                  ].map((field) => (
                    <div key={field.key} className="space-y-2">
                      <label
                        htmlFor={field.key}
                        className="text-sm font-medium"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.key}
                        value={profileData[field.key] || ""}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            [field.key]: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6">
                <h2 className="text-xl font-semibold mb-1">
                  Business Information
                </h2>
                <p className="text-gray-500 mb-4">
                  Details about your selling business
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Business Name", key: "businessName" },
                    { label: "Address", key: "address" },
                    { label: "Website", key: "website" },
                  ].map((field) => (
                    <div key={field.key} className="space-y-2">
                      <label
                        htmlFor={field.key}
                        className="text-sm font-medium"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.key}
                        value={profileData[field.key]}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            [field.key]: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                  ))}
                </div>
                <div className="space-y-2 mt-4">
                  <label htmlFor="bio" className="text-sm font-medium">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) =>
                      setProfileData({ ...profileData, bio: e.target.value })
                    }
                    disabled={!isEditing}
                    rows={4}
                    className="w-full border px-3 py-2 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-1/2 p-6">
                <h2 className="text-xl font-semibold mb-4">Seller Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm">Rating</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {user.sellerProfile.SellerRating}/5
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Total Sales</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {user.sellerProfile.CompletedSales}
                      </div>
                      <div className="text-xs text-gray-500">items sold</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Member Since</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{formattedDate}</div>
                      <div className="text-xs text-gray-500">{timeAgo}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerProfile;
