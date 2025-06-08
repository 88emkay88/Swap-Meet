import { useState } from "react";
import { FileText, Download } from "lucide-react";
import AdminSidebar from "./AdminSideBar";

const AdminReports = () => {
  const [reports, setReports] = useState([
    {
      name: "Sales Report",
      description: "Sales analysis and trends",
      type: "Sales",
    },
    {
      name: "User Activity",
      description: "User engagement metrics",
      type: "Users",
    },
    {
      name: "Inventory Report",
      description: "Stock levels and performance",
      type: "Inventory",
    },
    {
      name: "Financial Report",
      description: "Revenue and profit analysis",
      type: "Financial",
    },
  ]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <AdminSidebar />
        <div className="space-y-6 col-span-3 p-10">
          <div>
            <h1 className="text-3xl font-bold">Reports</h1>
            <p className="text-gray-500">Generate business reports</p>
          </div>

          <div className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Available Reports</h2>
              <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                <FileText className="w-4 h-4 mr-2" />
                Create Report
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reports.map((report, index) => (
                <div
                  key={index}
                  className="border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{report.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {report.description}
                      </p>
                    </div>
                    <span className="text-xs border px-2 py-1 rounded text-gray-700">
                      {report.type}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-100 transition">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </button>
                    <button className="px-3 py-1.5 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition">
                      Generate
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

export default AdminReports;
