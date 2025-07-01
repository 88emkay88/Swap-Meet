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
import SellersSideBar from "./SellersSideBar";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import { format, formatDistanceToNowStrict } from "date-fns";
import MobileSellerMenu from "./MobileSellerMenu";

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();
  const { refreshUser } = useAuth();
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    address: "",
    bio: "",
    website: "",
  });

  // User Data
  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.FirstName || "",
        lastName: user.LastName || "",
        email: user.Email || "",
        phone: user.PhoneNumber || "",
        businessName: user?.sellerProfile.storeName || "",
        address: user.Address || "",
        bio: user.sellerProfile.Bio || "",
        website: user.sellerProfile.website || "",
      });
    }
  }, [user]);

  const joinDate = new Date(user.Created_at);
  const formattedDate = format(joinDate, "MMM yyyy");
  const timeAgo = formatDistanceToNowStrict(joinDate);

  const handleSave = async () => {
    const updatedData = {
      UserId: user.UserId,
      FirstName: profileData.firstName || user.FirstName,
      LastName: profileData.lastName || user.LastName,
      StoreName: profileData.businessName || user.storeName,
      Email: profileData.email || user.Email,
      PhoneNumber: profileData.phone || user.PhoneNumber,
      Location: profileData.address || user.Address,
      Bio: profileData.bio || user.Bio,
      Website: profileData.website || user.Website,
      Avatar: profileData.avatar || user.Avatar,
    };

    try {
      const res = await fetch(
        `https://http://swapmeet.liveblog365.com/api/update-profile.php`,
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
        await refreshUser();
        alert("Profile updated!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sm_user_avatar");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcbt2u7wr/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = await uploadToCloudinary(file);
    setProfileData((prev) => ({
      ...prev,
      avatar: imageUrl, // attach the URL
    }));
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="py-10 ">
        <MobileSellerMenu />
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="hidden md:block">
            <SellersSideBar />
          </div>
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
                    type="button"
                    onClick={() =>
                      document.getElementById("profile-form").requestSubmit()
                    }
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
              <div className="lg:col-span-2">
                <form
                  id="profile-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                  }}
                  className="space-y-6"
                >
                  {/* Basic Info */}
                  <div className="border h-1/2 rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300  p-6">
                    <h2 className="text-xl font-semibold mb-1">
                      Basic Information
                    </h2>
                    <p className="text-gray-500 mb-4">
                      Your personal and contact details
                    </p>

                    <div className="flex items-center gap-4 mb-4">
                      {profileData.avatar || user?.Avatar ? (
                        <img
                          src={profileData.avatar || user.Avatar}
                          alt={`${user.FirstName}-${user.LastName}`}
                          className="h-20 w-20 rounded-full"
                        />
                      ) : (
                        <div className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                          {user.FirstName[0]}
                          {user.LastName[0]}
                        </div>
                      )}
                      {isEditing && (
                        <label className="border px-3 py-1 rounded text-sm">
                          <Camera className="mr-2 h-4 w-4 inline" />
                          Change Photo
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="hidden"
                          />
                        </label>
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

                  {/* Business Info */}
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
                    <div className="space-y-2 mt-4">
                      <label htmlFor="bio" className="text-sm font-medium">
                        Bio
                      </label>
                      <textarea
                        id="bio"
                        value={profileData.bio}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            bio: e.target.value,
                          })
                        }
                        disabled={!isEditing}
                        rows={4}
                        className="w-full border px-3 py-2 rounded"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* Seller Stats */}
              <div className="space-y-6">
                <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 p-6">
                  <h2 className="text-xl font-semibold mb-4">Seller Stats</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm">Rating</span>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">
                          {user.sellerProfile.SellerRating == "0.00" ? (
                            <p>No ratings</p>
                          ) : (
                            <p>{user.sellerProfile.SellerRating} / 5</p>
                          )}
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
    </>
  );
};

export default SellerProfile;
