import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PlusCircle, MoreHorizontal, Search, Filter } from "lucide-react";
import SellersSideBar from "./SellersSideBar";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import MobileSellerMenu from "./MobileSellerMenu";

const Listings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const { user } = useAuth();
  const [userItems, setUserItems] = useState([]);

  useEffect(() => {
    if (!user || !user.sellerProfile || !user.sellerProfile.sellerID) return;

    const fetchUserItems = async () => {
      console.log("Fetching with sellerID:", user.sellerProfile.sellerID);

      try {
        const res = await fetch(
          `${"https://http://swapmeet.liveblog365.com/api"}/get-seller-products.php?sellerId=${
            user.sellerProfile.sellerID
          }`
        );
        const data = await res.json();

        if (data.success) {
          setUserItems(data.products);
          console.log("Fetched products:", data.products);
        } else {
          console.error("Fetch failed:", data.message);
        }
      } catch (err) {
        console.error("Error fetching seller listings", err);
      }
    };

    fetchUserItems();
  }, [user]);

  const filteredListings = userItems.filter((listing) => {
    const matchesSearch =
      listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      listing.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === "newest") {
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    } else if (sortBy === "oldest") {
      return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
    }
    return 0;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="py-10">
      <MobileSellerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <SellersSideBar />
        </div>
        <div className="space-y-6 col-span-3 py-10 pr-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold">My Listings</h1>
              <p className="text-gray-500">Manage all your listed items</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
              <Link
                to="/seller-dashboard/post-item"
                className="flex items-center"
              >
                <PlusCircle className="mr-2" size={18} /> Add New Listing
              </Link>
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto md:flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="search"
                placeholder="Search listings..."
                className="w-full pl-10 pr-4 py-2 border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4">
              <select
                className="w-[160px] border rounded-md py-2 px-3"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="views-high">Most Views</option>
                <option value="views-low">Least Views</option>
              </select>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Item</th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">
                    Category
                  </th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">
                    Condition
                  </th>
                  <th className="px-4 py-2 text-left">Status</th>
                  <th className="px-4 py-2 text-left hidden md:table-cell">
                    Date Added
                  </th>
                  <th className="px-4 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedListings.length > 0 ? (
                  sortedListings.map((listing) => (
                    <tr key={listing.ProductId} className="border-t">
                      <td className="px-4 py-2">
                        <div className="flex items-center gap-3">
                          <img
                            src={listing.image}
                            alt={listing.title}
                            className="w-10 h-10 object-cover rounded-md hidden sm:block"
                          />
                          <div>
                            <div className="font-medium">{listing.title}</div>
                            <div className="text-xs text-gray-500 md:hidden">
                              {listing.category} • {listing.condition}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 hidden md:table-cell">
                        {listing.category}
                      </td>
                      <td className="px-4 py-2 hidden md:table-cell">
                        {listing.condition}
                      </td>
                      <td className="px-4 py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold ${
                            listing.Status === "Active"
                              ? "bg-green-100 text-green-800"
                              : listing.Status === "Sold"
                              ? "bg-gray-300 text-gray-700"
                              : listing.Status === "Inactive"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-700"
                          }
                          `}
                        >
                          {listing.Status}
                        </span>
                      </td>

                      <td className="px-4 py-2 hidden md:table-cell">
                        {formatDate(listing.dateAdded)}
                      </td>
                      <td className="px-4 py-2 text-right">
                        <button className="text-blue-500 hover:underline text-sm">
                          <Link to={`/product/${listing.ProductId}`}>View</Link>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4 text-gray-500">
                      No listings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
