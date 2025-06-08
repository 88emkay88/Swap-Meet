import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbReportMoney } from "react-icons/tb";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Settings,
  Shield,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: BarChart3, label: "Analytics", path: "/admin/analytics" },
    { icon: TbReportMoney, label: "Payments", path: "/admin/payments" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
    { icon: Shield, label: "Security", path: "/admin/security" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  return (
    <div
      className={`bg-white border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!collapsed && (
          <h2 className="text-xl font-bold text-gray-800">Admin Panel</h2>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <item.icon size={20} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
