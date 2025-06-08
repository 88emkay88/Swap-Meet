import { BarChart3, TrendingUp, Users } from "lucide-react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import AdminSidebar from "./AdminSideBar";

const AdminAnalytics = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 h-3/4 p-10 col-span-3">
          <div>
            <h1 className="text-3xl font-bold">Analytics</h1>
            <p className="text-gray-500">Track performance metrics</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <h2 className="text-sm font-medium">Total Revenue</h2>
                <FaMoneyBillTrendUp className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">R124,580</div>
                <p className="text-xs text-gray-500">+12% from last month</p>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <h2 className="text-sm font-medium">Active Users</h2>
                <Users className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">8,543</div>
                <p className="text-xs text-gray-500">+8% from last month</p>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <h2 className="text-sm font-medium">Sales</h2>
                <BarChart3 className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">2,345</div>
                <p className="text-xs text-gray-500">+15% from last month</p>
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex flex-row items-center justify-between pb-2">
                <h2 className="text-sm font-medium">Growth</h2>
                <TrendingUp className="h-4 w-4 text-gray-500" />
              </div>
              <div>
                <div className="text-2xl font-bold">+12.5%</div>
                <p className="text-xs text-gray-500">vs last month</p>
              </div>
            </div>
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
