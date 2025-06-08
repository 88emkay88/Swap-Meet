
import { Shield, AlertTriangle, Lock, Eye } from "lucide-react";
import AdminSidebar from "./AdminSideBar";

const AdminSecurity = () => {
  const securityEvents = [
    {
      id: 1,
      type: "Failed Login",
      user: "unknown@example.com",
      severity: "Medium",
    },
    {
      id: 2,
      type: "Suspicious Activity",
      user: "john@example.com",
      severity: "High",
    },
    {
      id: 3,
      type: "Password Reset",
      user: "jane@example.com",
      severity: "Low",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10">
          <div>
            <h1 className="text-3xl font-bold">Security</h1>
            <p className="text-gray-500">Monitor security events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Security Score</p>
                  <p className="text-2xl font-bold">94%</p>
                </div>
                <Shield className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Threats</p>
                  <p className="text-2xl font-bold">3</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Blocked IPs</p>
                  <p className="text-2xl font-bold">127</p>
                </div>
                <Lock className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Login Attempts</p>
                  <p className="text-2xl font-bold">1,234</p>
                </div>
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-2/3">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold">Security Events</h2>
            </div>
            <div className="p-6 space-y-4">
              {securityEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{event.type}</p>
                    <p className="text-sm text-gray-500">{event.user}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        event.severity === "High"
                          ? "bg-red-100 text-red-800"
                          : event.severity === "Medium"
                          ? "bg-gray-100 text-gray-800"
                          : "border border-gray-300 text-gray-700"
                      }`}
                    >
                      {event.severity}
                    </span>
                    <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-100 transition">
                      Investigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSecurity;
