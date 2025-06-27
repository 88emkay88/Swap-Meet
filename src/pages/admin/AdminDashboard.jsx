import { useEffect, useState } from "react";
import { Users, Package, ShoppingCart } from "lucide-react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import AdminSidebar from "./AdminSideBar";

const AdminDashboard = () => {
  const [stats, setStats] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch(
          "http://localhost/swapmeet-backend/admin-dashboard.php"
        );
        const data = await res.json();
        if (data.success) {
          const d = data.data;
          setStats([
            { title: "Total Users", value: d.totalUsers, icon: Users },
            { title: "Total Products", value: d.totalProducts, icon: Package },
            { title: "Total Orders", value: d.totalOrders, icon: ShoppingCart },
            {
              title: "Revenue",
              value: d.totalRevenue,
              icon: FaMoneyBillTrendUp,
            },
          ]);
          setRecentOrders(d.recentOrders);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Failed to fetch admin stats", err);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10 h-3/4">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">
              Welcome back! Here's your marketplace overview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4"
              >
                <div className="flex flex-row items-center justify-between pb-2">
                  <p className="text-sm font-medium">{stat.title}</p>
                  <stat.icon className="h-4 w-4 text-gray-500" />
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
            <p className="text-lg font-semibold mb-4">Recent Orders</p>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-gray-500">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{order.amount}</p>
                    <p className="text-sm text-gray-500">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
