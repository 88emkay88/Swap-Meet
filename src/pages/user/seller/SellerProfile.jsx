import { useState } from "react";
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

const SellerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+27 (71) 123-4567",
    businessName: "John's Vintage Shop",
    businessType: "Individual Seller",
    location: "Midrand, SA",
    bio: "Passionate collector and seller of vintage items. Specializing in electronics, cameras, and retro accessories. Member since 2023.",
    website: "www.johnsvintageshop.com",
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
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
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
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
              </div>

              <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-1/2 p-6">
                <h2 className="text-xl font-semibold mb-1">
                  Business Information
                </h2>
                <p className="text-gray-500 mb-4">
                  Details about your selling business
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Business Name", key: "businessName" },
                    { label: "Business Type", key: "businessType" },
                    { label: "Location", key: "location" },
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
                      <div className="font-semibold">4.8/5</div>
                      <div className="text-xs text-gray-500">12 reviews</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Total Sales</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">24</div>
                      <div className="text-xs text-gray-500">items sold</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Member Since</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">Jan 2023</div>
                      <div className="text-xs text-gray-500">1 year</div>
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
