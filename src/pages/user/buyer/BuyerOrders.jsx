import { useEffect, useState } from "react";
import { Search, Package, AlertCircle, CheckCircle } from "lucide-react";
import MobileBuyerMenu from "./MobileBuyerMenu";
import BuyerSideBar from "./BuyerSideBar";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import { useEscrow } from "../../../context/EscrowContext";

const BuyerOrders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const { escrowTransactions } = useEscrow();
  const { user } = useAuth();

  // FETCH BUYER ORDERS
  useEffect(() => {
    if (!user || !user.buyerProfile || !user.buyerProfile.buyerId) return;

    const fetchOrders = async () => {
      console.log("Fetching orders for BuyerID: ", user.buyerProfile.buyerId);

      try {
        const res = await fetch(
          `${"https://swapmeet.atwebpages.com"}/get-buyer-orders.php?buyerId=${
            user.buyerProfile.buyerId
          }`
        );

        const data = await res.json();

        if (data.success) {
          setOrders(data.orders);
          console.log("orders: ", data.orders);
        } else {
          console.error("fetching orders fails");
        }
      } catch (err) {
        console.error("Error fetching orders for buyers, error: ", err);
      }
    };

    fetchOrders();
  }, [user]);

  const transactions = escrowTransactions;

  const filteredOrders = orders.filter(
    (order) =>
      order.productTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.OrderID.toLowerCase().includes(searchTerm.toLowerCase())
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
            <div className="md:flex justify-between items-center">
              <div className="mb-2 md:mb-0">
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
                {filteredOrders > 0 ? (
                  filteredOrders.map((order) => (
                    <div key={order.OrderID}>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-4">
                          <img
                            src={order.productImage}
                            alt={order.productTitle}
                            className="w-16 h-16 rounded-lg object-cover"
                          />
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="font-medium">{order.OrderID}</p>
                              <span
                                className={`text-xs px-2 py-1 rounded ${getStatusColor(
                                  order.Status
                                )}`}
                              >
                                <div className="flex items-center gap-1">
                                  {getStatusIcon(order.Status)}
                                  {order.Status.charAt(0).toUpperCase() +
                                    order.Status.slice(1)}
                                </div>
                              </span>
                            </div>
                            <p className="text-lg font-medium">
                              {order.productTitle}
                            </p>
                            <div className="text-sm text-gray-500 flex gap-2">
                              <span>Sold by {order.sellerName}</span>
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
                            R{(order.Amount / 100).toFixed(2)}
                          </p>
                          {order.trackingNumber && (
                            <p className="text-sm text-gray-400">
                              #{order.TrackingNumber}
                            </p>
                          )}
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() =>
                                setSelectedOrder(
                                  selectedOrder === order.OrderID
                                    ? null
                                    : order.OrderID
                                )
                              }
                              className="bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded text-sm"
                            >
                              {selectedOrder === order.OrderID
                                ? "Hide Details"
                                : "View Details"}
                            </button>
                          </div>
                        </div>
                      </div>

                      {selectedOrder === order.OrderID && order.EscrowID && (
                        <div className="mt-2 p-4 border border-blue-100 rounded-lg bg-blue-50 text-sm space-y-2">
                          <h2 className="text-xl font-semibold mb-4">
                            Escrow Transactions
                          </h2>
                          {transactions.length === 0 ? (
                            <p className="text-gray-400">
                              No escrow transactions found.
                            </p>
                          ) : (
                            <div className="space-y-4">
                              {transactions.map((tx) => (
                                <div
                                  key={tx.EscrowID}
                                  className="border rounded-xl p-5 shadow-sm bg-white"
                                >
                                  <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-4">
                                      <img
                                        src={tx.productImage}
                                        alt={tx.productTitle}
                                        className="w-16 h-16 rounded-lg object-cover"
                                      />
                                      <div>
                                        <h2 className="text-lg font-semibold">
                                          {tx.productTitle}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                          Sold by {tx.sellerName}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          Created:{" "}
                                          {new Date(
                                            tx.CreatedAt
                                          ).toLocaleDateString()}
                                        </p>
                                      </div>
                                    </div>
                                    <div
                                      className={`text-xs px-2 py-1 rounded font-medium ${getStatusColor(
                                        tx.Status
                                      )}`}
                                    >
                                      <div className="flex items-center gap-1">
                                        {getStatusIcon(tx.Status)}
                                        {tx.Status.charAt(0).toUpperCase() +
                                          tx.Status.slice(1)}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex justify-between items-center mt-3 text-sm">
                                    <p>
                                      <strong>Amount:</strong> R
                                      {parseFloat(tx.Amount).toFixed(2)}
                                    </p>
                                    {tx.DeliveryDeadline && (
                                      <p>
                                        <strong>Delivery Deadline:</strong>{" "}
                                        {new Date(
                                          tx.DeliveryDeadline
                                        ).toLocaleDateString()}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div>No Orders yet</div>
                )}
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
