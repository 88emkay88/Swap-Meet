import { useState } from "react";
import { Upload, Info, Plus, X } from "lucide-react";
import SellersSideBar from "./SellersSideBar"
import Footer from "../../../components/Footer";
// Mock categories
const categories = ["Electronics", "Accessories", "Games", "Sports", "Auction"];

// Mock conditions
const conditions = ["New", "Like New", "Excellent", "Good", "Fair", "Poor"];

const PostItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [condition, setCondition] = useState("");
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = () => {
    setUploadingImage(true);

    setTimeout(() => {
      const imageId = Math.floor(Math.random() * 1000);
      const newImage = `https://source.unsplash.com/random/800x600?sig=${imageId}`;
      setImages((prev) => [...prev, newImage]);
      setUploadingImage(false);
    }, 1500);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images.length === 0) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setTimeout(() => {
        window.location.href = "/dashboard/listings";
      }, 1000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <SellersSideBar />
        <div className=" mx-auto py-8 col-span-3">
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
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-square border rounded-2xl border-gray-300/75 hover:shadow-lg transition-shadow duration-300 h-full overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Item image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
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
                  <button
                    type="button"
                    onClick={handleImageUpload}
                    disabled={uploadingImage}
                    className="flex flex-col items-center justify-center border-2 border-dashed rounded-2xl aspect-square text-gray-400 hover:text-black hover:border-gray-400 transition-colors"
                  >
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
                  </button>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="category" className="block font-medium">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-xl px-3 py-2"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

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
