import { useEffect, useState } from "react";
import { Upload, Info, Plus, X } from "lucide-react";
import SellersSideBar from "./SellersSideBar";
import Footer from "../../../components/Footer";
import { useAuth } from "../../../context/AuthContext";
import MobileSellerMenu from "./MobileSellerMenu";

// Mock conditions
const conditions = ["New", "Like New", "Excellent", "Good", "Fair", "Poor"];

const PostItem = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [color, setColor] = useState("");
  const [details, setDetails] = useState([""]);
  const [isAuction, setIsAuction] = useState(false);
  const [startingBid, setStartingBid] = useState("");
  const [endTime, setEndTime] = useState("");

  const { user } = useAuth();

  const colors = [
    "Red",
    "Blue",
    "Black",
    "White",
    "Green",
    "Yellow",
    "Orange",
    "Pink",
    "Gray",
    "Purple",
  ];

  useEffect(() => {
    //  Fetches categories on load
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${"https://swapmeet-backend.infinityfreeapp.com/api"}/get-categories.php`
        );
        const data = await res.json();

        if (data.success) {
          setCategories(data.categories);
        }
      } catch (err) {
        console.error("Fail to fetch categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (e) => {
    const selectedId = e.target.value;
    setSelectedCategoryId(selectedId);
    setSelectedSubcategory("");

    // Find subcategories for selected categories
    const selected = categories.find((cat) => cat.id.toString() === selectedId);
    setSubcategory(selected ? selected.subcategories : []);
  };

  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "sm_product_images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dcbt2u7wr/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    setUploadingImage(true);

    return result.secure_url;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const localUrl = URL.createObjectURL(file);
    setImages((prev) => [...prev, { url: localUrl, isLoading: true }]);

    try {
      const uploadedUrl = await uploadToCloudinary(file);
      setImages((prev) =>
        prev.map((img) =>
          img.url === localUrl ? { url: uploadedUrl, isLoading: false } : img
        )
      );
    } catch (err) {
      console.error("Image upload failed:", err);
      setImages((prev) => prev.filter((img) => img.url !== localUrl));
    }
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags((prev) => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tag) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  const addDetail = () => setDetails([...details, ""]);

  const updateDetail = (i, value) => {
    const updated = [...details];
    updated[i] = value;
    setDetails(updated);
  };

  const removeDetail = (i) => {
    const updated = details.filter((_, index) => index !== i);
    setDetails(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      return;
    }

    const imageUrls = images.map((img) => img.url);

    const itemData = {
      name: title,
      price,
      description,
      category: selectedCategoryId,
      subcategory: selectedSubcategory,
      color,
      condition,
      location,
      tags,
      details: details.filter((d) => d.trim() !== ""),
      images: imageUrls,
      sellerId: user.sellerProfile.sellerID,
      isAuction,
      startingBid,
      endTime,
    };

    setIsLoading(true);

    const res = await fetch(
      `https://swapmeet-backend.infinityfreeapp.com/api/post-item.php`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemData),
      }
    );

    const data = await res.json();
    setIsLoading(false);

    if (data.success) {
      alert("Item posted!");
      window.location.href = "/seller-dashboard/listings";
    } else {
      alert(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="py-10">
      <MobileSellerMenu />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="hidden md:block">
          <SellersSideBar />
        </div>
        <div className=" mx-10 py-8 col-span-3">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Post an Item</h1>
            <p className="text-gray-500">
              Share details about your item to find the perfect swap
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="images" className="block font-medium">
                Item Images
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="relative aspect-square border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full overflow-hidden"
                  >
                    <img
                      src={img.url}
                      alt={`Item image ${index + 1}`}
                      className="w-full h-full object-cover opacity-90"
                    />
                    {img.isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}

                {images.length < 5 && (
                  <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-2xl aspect-square text-gray-400 hover:text-black hover:border-gray-400 transition-colors">
                    {uploadingImage ? (
                      <div className="flex flex-col items-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-500"></div>
                        <span className="mt-2 text-xs">Uploading...</span>
                      </div>
                    ) : (
                      <>
                        <Upload size={24} />
                        <span className="mt-2 text-xs font-medium">
                          Add Photo
                        </span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <Info size={14} />
                Add up to 5 images. First image will be the cover.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="block font-medium">
                  Item Title
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter a descriptive title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-xl px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="title" className="block font-medium">
                  Item Price
                </label>
                <input
                  id="price"
                  type="number"
                  placeholder="Enter a price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-xl px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="description" className="block font-medium">
                  Description
                </label>
                <textarea
                  id="description"
                  placeholder="Describe your item"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-xl px-3 py-2"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="block font-medium">
                  Details
                </label>
                {details.map((detail, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={detail}
                      onChange={(e) => updateDetail(i, e.target.value)}
                      className="felx-1 border border-gray-300 rounded-xl px-3 py-2"
                      placeholder={`Detail ${i + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeDetail(i)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addDetail}
                  className="text-blue-600 hover:bg-blue-400 px-4 py-2 rounded-2xl"
                >
                  + Add Detail
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="categories" className="block font-medium">
                    Category
                  </label>
                  <select
                    value={selectedCategoryId}
                    onChange={handleCategoryChange}
                    required
                    className="w-full border border-gray-300 rounded-xl px-3 py-2"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {selectedCategoryId && subcategory.length > 0 && (
                  <div className="space-y-2">
                    <label htmlFor="subcategory" className="block font-medium">
                      Subcategory
                    </label>
                    <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                      required
                      className="w-full border border-gray-300 rounded-xl px-3 py-2"
                    >
                      <option value="" disabled>
                        Select a subcategory
                      </option>
                      {subcategory.map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={isAuction}
                      onChange={(e) => setIsAuction(e.target.checked)}
                    />
                    List as an auction
                  </label>
                </div>

                {isAuction && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="startingBid"
                        className="block font-medium"
                      >
                        Starting Bid (R)
                      </label>
                      <input
                        type="number"
                        id="startingBid"
                        value={startingBid}
                        onChange={(e) => setStartingBid(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="endTime" className="block font-medium">
                        Auction End Time
                      </label>
                      <input
                        type="datetime-local"
                        id="endTime"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-3 py-2"
                        required
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="condition" className="block font-medium">
                    Condition
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-xl px-3 py-2"
                  >
                    <option value="" disabled>
                      Select condition
                    </option>
                    {conditions.map((cond) => (
                      <option key={cond} value={cond}>
                        {cond}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="color" className="block font-medium">
                  Color
                </label>
                <select
                  id="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-xl px-3 py-2"
                >
                  <option value="" disabled>
                    Select color
                  </option>
                  {colors.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="block font-medium">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="City, State or ZIP"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-xl px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="tags" className="block font-medium">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <div
                      key={tag}
                      className="bg-gray-200 text-black px-3 py-1 text-sm rounded-full flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-gray-600 hover:text-black"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    id="newTag"
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-xl px-3 py-2"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    disabled={!newTag.trim()}
                    className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <p className="text-sm text-gray-500">
                  Add keywords to help others find your item
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl flex-1"
                disabled={isLoading}
              >
                {isLoading ? "Posting Item..." : "Post Item"}
              </button>
              <button
                type="button"
                className="border border-gray-300 px-4 py-2 rounded-xl flex-1"
                disabled={isLoading}
              >
                Save as Draft
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostItem;
