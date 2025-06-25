import React, { useState } from "react";
import BuyerSideBar from "./BuyerSideBar";
import Footer from "../../../components/Footer";
import MobileBuyerMenu from "./MobileBuyerMenu";

export default function Settings() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(true);
  const [language, setLanguage] = useState("en");
  const [timezone, setTimezone] = useState("UTC-8");
  const [privacy, setPrivacy] = useState("public");

  const handleSaveSettings = () => {
    alert("Settings saved: Your preferences have been updated successfully.");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <MobileBuyerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <BuyerSideBar />
        </div>

        <div className="w-full p-10 col-span-3 mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-500">
            Settings
          </h1>

          <div className="space-y-6">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">
                Notification Settings
              </h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={() => setEmailNotifications(!emailNotifications)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Email Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={() => setPushNotifications(!pushNotifications)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Push Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={marketingEmails}
                    onChange={() => setMarketingEmails(!marketingEmails)}
                    className="h-4 w-4 text-blue-500"
                  />
                  <span>Marketing Emails</span>
                </label>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6 bg-white">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">
                Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Language</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="es">Spanish</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Timezone</label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="UTC-8">UTC-8</option>
                    <option value="UTC+0">UTC+0</option>
                    <option value="UTC+2">UTC+2</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-1">Privacy</label>
                  <select
                    value={privacy}
                    onChange={(e) => setPrivacy(e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2"
                  >
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                    <option value="friends">Friends Only</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleSaveSettings}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
