import { useState } from "react";
import { Settings, Save } from "lucide-react";
import AdminSidebar from "./AdminSideBar";

const AdminSettings = () => {
  const [siteName, setSiteName] = useState("Swap Meet");
  const [contactEmail, setContactEmail] = useState("admin@swapmeet.com");
  const [userRegistration, setUserRegistration] = useState(true);
  const [productReviews, setProductReviews] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-gray-500">Configure platform settings</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* General Settings Card */}
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <div className="flex items-center gap-2 mb-4 text-lg font-semibold">
                <Settings className="w-5 h-5" />
                General Settings
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="siteName"
                    className="block text-sm font-medium mb-1"
                  >
                    Site Name
                  </label>
                  <input
                    id="siteName"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactEmail"
                    className="block text-sm font-medium mb-1"
                  >
                    Contact Email
                  </label>
                  <input
                    id="contactEmail"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </button>
              </div>
            </div>

            {/* Feature Settings Card */}
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
              <h2 className="text-lg font-semibold mb-6">Feature Settings</h2>
              <div className="space-y-6">
                {/* Toggle Item */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">User Registration</h4>
                    <p className="text-sm text-gray-500">
                      Allow new user signups
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={userRegistration}
                    onChange={() => setUserRegistration(!userRegistration)}
                    className="w-5 h-5 text-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Product Reviews</h4>
                    <p className="text-sm text-gray-500">
                      Enable reviews and ratings
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={productReviews}
                    onChange={() => setProductReviews(!productReviews)}
                    className="w-5 h-5 text-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-gray-500">
                      Send system notifications
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                    className="w-5 h-5 text-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
