import { useEffect, useState } from "react";
import { Search, Package, Truck, CheckCircle } from "lucide-react";
import SellersSideBar from "./SellersSideBar";
import MobileSellerMenu from "./MobileSellerMenu";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";

const SellerOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  // fetch orders
  useEffect(() => {
    if (!user || !user.sellerProfile || !user.sellerProfile.sellerID) return;

    const fetchOrders = async () => {
      console.log("fetching Orders for SellerID:", user.sellerProfile.sellerID);

      try {
        const res = await fetch(
          `http://localhost/swapmeet-backend/get-seller-orders.php?sellerId=${user.sellerProfile.sellerID}`
        );

        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
          console.log("orders: ", data.orders);
        } else {
          console.error("Fetching products Failed");
        }
      } catch (err) {
        console.error("Error fetching orders for sellers ", err);
      }
    };

    fetchOrders();
  }, [user]);

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.OrderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.buyerName.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" || order.Status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-purple-100 text-purple-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleStatusUpdate = (orderId, newStatus) => {
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
  };

  const handleShipOrder = (orderId) => {
    console.log(`Shipping order ${orderId}`);
  };

  return (
    <div className="py-10">
      <MobileSellerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <SellersSideBar />
        </div>
        <div className="col-span-3 p-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">Order Management</h1>
                <p className="text-gray-500">Manage your sales and shipping</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {["pending", "processing", "shipped", "delivered"].map(
                (status, i) => {
                  const count = orders.filter(
                    (o) => o.Status === status
                  ).length;
                  const icons = [
                    <Package className="h-8 w-8 text-yellow-500" />,
                    <Package className="h-8 w-8 text-blue-500" />,
                    <Truck className="h-8 w-8 text-purple-500" />,
                    <CheckCircle className="h-8 w-8 text-green-500" />,
                  ];

                  const label =
                    status.charAt(0).toUpperCase() + status.slice(1);

                  return (
                    <div
                      key={status}
                      className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-500">{label}</p>
                          <p className="text-2xl font-bold">{count}</p>
                        </div>
                        {icons[i]}
                      </div>
                    </div>
                  );
                }
              )}
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="p-4 flex flex-col sm:flex-row justify-between gap-4">
                <h2 className="text-lg font-semibold">Recent Orders</h2>
                <div className="md:flex space-y-3 md:space-y-0 gap-2">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={16}
                    />
                    <input
                      type="text"
                      placeholder="Search orders..."
                      className="pl-9 w-64 border rounded px-3 py-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    className="px-3 py-2 border rounded-md"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="processing">Processing</option>
                    <option value="shipped">Shipped</option>
                    <option value="delivered">Delivered</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-auto p-4">
                <table className="min-w-full border">
                  <thead className="bg-gray-100">
                    <tr>
                      {[
                        "Order",
                        "Customer",
                        "Item",
                        "Amount",
                        "Status",
                        "Actions",
                      ].map((h) => (
                        <th
                          key={h}
                          className="text-left p-2 text-sm font-medium text-gray-600"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders > 0 ? (
                      filteredOrders.map((order) => (
                        <tr key={order.OrderID} className="border-t">
                          <td className="p-2">
                            <p className="font-medium">{order.OrderID}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(order.orderDate).toLocaleDateString()}
                            </p>
                          </td>
                          <td className="p-2">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">
                                {order.buyerName
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </div>
                              <div>
                                <p className="font-medium">{order.buyerName}</p>
                                <p className="text-sm text-gray-500">
                                  {order.buyerEmail}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="flex items-center gap-2">
                              <img
                                src={order.productImage}
                                alt={order.productTitle}
                                className="w-10 h-10 rounded object-cover"
                              />
                              <div>
                                <p className="font-medium">
                                  {order.productTitle}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="p-2 font-medium">
                            R{(order.Amount / 100).toFixed(2)}
                          </td>
                          <td className="p-2">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                                order.Status
                              )}`}
                            >
                              {order.Status.charAt(0).toUpperCase() +
                                order.Status.slice(1)}
                            </span>
                          </td>
                          <td className="p-2">
                            <div className="flex gap-1">
                              {order.Status === "processing" && (
                                <button
                                  className="bg-blue-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1"
                                  onClick={() => handleShipOrder(order.OrderID)}
                                >
                                  <Truck className="w-4 h-4" /> Ship
                                </button>
                              )}
                              <button>view</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr colSpan={6} className="flex justify-center">
                        <td>
                          <p>No Orders yet</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerOrders;
