import { useState } from "react";
import {
  CreditCard,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import AdminSidebar from "./AdminSideBar";

const AdminPayments = () => {
  const [payments] = useState([
    {
      id: "PAY-001",
      customer: "John Doe",
      amount: "R299.97",
      status: "Completed",
    },
    {
      id: "PAY-002",
      customer: "Jane Smith",
      amount: "R89.99",
      status: "Pending",
    },
    {
      id: "PAY-003",
      customer: "Bob Johnson",
      amount: "R156.50",
      status: "Failed",
    },
  ]);

  const getBadgeColor = (status) => {
    if (status === "Completed") return "bg-green-500 text-white";
    if (status === "Pending") return "bg-yellow-500 text-white";
    return "bg-red-500 text-white";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10">
          <div>
            <h1 className="text-3xl font-bold">Payments</h1>
            <p className="text-gray-500">Monitor payment transactions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold">R124,580</p>
                </div>
                <CreditCard className="w-8 h-8 text-green-500" />
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-bold">R2,340</p>
                </div>
                <RefreshCw className="w-8 h-8 text-yellow-500" />
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Failed</p>
                  <p className="text-2xl font-bold">R890</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </div>

            <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Success Rate</p>
                  <p className="text-2xl font-bold">94.2%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-3/4">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
            </div>
            <div className="p-4 space-y-4">
              {payments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div>
                    <p className="font-medium">{payment.id}</p>
                    <p className="text-sm text-gray-500">{payment.customer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{payment.amount}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded ${getBadgeColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
                    </span>
                    <button className="text-white text-xs px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 transition-colors">
                      View
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

export default AdminPayments;
