import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import AdminSidebar from "./AdminSideBar";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      role: "Buyer",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Active",
      role: "Seller",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Suspended",
      role: "Buyer",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: "Active",
      role: "Seller",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Users</h1>
              <p className="text-gray-500">Manage platform users</p>
            </div>
            <button className="flex items-center px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
              <UserPlus className="w-4 h-4 mr-2" />
              Add User
            </button>
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Users</h2>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search users..."
                  className="pl-9 w-64 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.role === "Seller"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {user.role}
                    </span>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-blue-500 hover:text-white transition">
                      View
                    </button>
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

export default Users;
