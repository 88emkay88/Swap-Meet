import { useState } from "react";
import {
  Search,
  Package,
  MessageSquare,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import MobileBuyerMenu from "./MobileBuyerMenu";
import BuyerSideBar from "./BuyerSideBar";
import Footer from "../../../components/Footer";

const mockOrders = [
  {
    id: "ORD-001",
    item: {
      title: "Vintage Leather Jacket",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Fashion",
    },
    seller: {
      name: "Sarah Wilson",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    amount: 12999,
    status: "delivered",
    orderDate: "2024-01-15",
    trackingNumber: "TRK123456789",
    escrowTransaction: {
      id: "ESC-001",
      buyerId: "buyer1",
      sellerId: "seller1",
      itemId: "item1",
      amount: 12999,
      status: "delivered",
      createdAt: "2024-01-15T10:00:00Z",
      deliveryDeadline: "2024-01-22T10:00:00Z",
    },
  },
  {
    id: "ORD-002",
    item: {
      title: "MacBook Pro 2021",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Electronics",
    },
    seller: {
      name: "Mike Chen",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    amount: 149999,
    status: "shipped",
    orderDate: "2024-01-20",
    trackingNumber: "TRK987654321",
    escrowTransaction: {
      id: "ESC-002",
      buyerId: "buyer1",
      sellerId: "seller2",
      itemId: "item2",
      amount: 149999,
      status: "funded",
      createdAt: "2024-01-20T14:00:00Z",
      deliveryDeadline: "2024-01-27T14:00:00Z",
    },
  },
  {
    id: "ORD-003",
    item: {
      title: "Designer Handbag",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Fashion",
    },
    seller: {
      name: "Emma Davis",
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    amount: 8999,
    status: "processing",
    orderDate: "2024-01-22",
    escrowTransaction: {
      id: "ESC-003",
      buyerId: "buyer1",
      sellerId: "seller3",
      itemId: "item3",
      amount: 8999,
      status: "funded",
      createdAt: "2024-01-22T09:00:00Z",
      deliveryDeadline: "2024-01-29T09:00:00Z",
    },
  },
];

const BuyerOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const filteredOrders = mockOrders.filter(
    (order) =>
      order.item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusIcon = (status) => {
    switch (status) {
      case "processing":
        return <Package className="w-4 h-4 text-blue-500" />;
      case "shipped":
        return <Package className="w-4 h-4 text-yellow-500" />;
      case "delivered":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "shipped":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="py-10">
      <MobileBuyerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <BuyerSideBar />
        </div>
        <div className="col-span-3 p-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold">My Orders</h1>
                <p className="text-gray-500">
                  Track your purchases and manage returns
                </p>
              </div>
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="pl-9 py-2 border rounded-md w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <h2 className="text-xl font-semibold mb-4">Order History</h2>
              <div className="space-y-4">
                {filteredOrders.map((order) => (
                  <div key={order.id}>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-center gap-4">
                        <img
                          src={order.item.image}
                          alt={order.item.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{order.id}</p>
                            <span
                              className={`text-xs px-2 py-1 rounded ${getStatusColor(
                                order.status
                              )}`}
                            >
                              <div className="flex items-center gap-1">
                                {getStatusIcon(order.status)}
                                {order.status.charAt(0).toUpperCase() +
                                  order.status.slice(1)}
                              </div>
                            </span>
                          </div>
                          <p className="text-lg font-medium">
                            {order.item.title}
                          </p>
                          <div className="text-sm text-gray-500 flex gap-2">
                            <span>Sold by {order.seller.name}</span>
                            <span>•</span>
                            <span>
                              Ordered{" "}
                              {new Date(order.orderDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right space-y-2">
                        <p className="font-medium">
                          R{(order.amount / 100).toFixed(2)}
                        </p>
                        {order.trackingNumber && (
                          <p className="text-sm text-gray-400">
                            #{order.trackingNumber}
                          </p>
                        )}
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() =>
                              setSelectedOrder(
                                selectedOrder === order.id ? null : order.id
                              )
                            }
                            className="bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded text-sm"
                          >
                            {selectedOrder === order.id
                              ? "Hide Details"
                              : "View Details"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {selectedOrder === order.id && order.escrowTransaction && (
                      <div className="mt-2 p-4 border border-blue-100 rounded-lg bg-blue-50 text-sm space-y-2">
                        <p>
                          <strong>Escrow ID:</strong>{" "}
                          {order.escrowTransaction.id}
                        </p>
                        <p>
                          <strong>Status:</strong>{" "}
                          {order.escrowTransaction.status}
                        </p>
                        <p>
                          <strong>Created:</strong>{" "}
                          {new Date(
                            order.escrowTransaction.createdAt
                          ).toLocaleDateString()}
                        </p>
                        <p>
                          <strong>Delivery Deadline:</strong>{" "}
                          {new Date(
                            order.escrowTransaction.deliveryDeadline
                          ).toLocaleDateString()}
                        </p>
                        <div className="flex gap-2">
                          <button
                            className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                            onClick={() =>
                              console.log(
                                "Releasing payment for:",
                                order.escrowTransaction.id
                              )
                            }
                          >
                            Release Payment
                          </button>
                          <button
                            className="bg-red-500 text-white px-3 py-1 rounded text-sm"
                            onClick={() =>
                              console.log(
                                "Filing dispute for:",
                                order.escrowTransaction.id
                              )
                            }
                          >
                            Dispute
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerOrders;
