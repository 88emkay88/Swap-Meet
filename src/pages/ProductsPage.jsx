// src/pages/ProductPage.jsx
import React, { useState } from "react";
import ProductsHeader from "../components/ProductsHeader";
import Breadcrumbs from "../components/Breadcrumbs";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 899,
    category: "Electronics",
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Stylish Jacket",
    price: 499,
    category: "Clothing",
    image: "https://via.placeholder.com/300x200?text=Jacket",
  },
  {
    id: 3,
    name: "Power Drill",
    price: 1199,
    category: "Tools",
    image: "https://via.placeholder.com/300x200?text=Drill",
  },
  {
    id: 4,
    name: "Cookware Set",
    price: 799,
    category: "Kitchen",
    image: "https://via.placeholder.com/300x200?text=Cookware",
  },
];

export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  return (
    <div>
      <ProductsHeader />
      
      {/* Background picture */}
      <div className="h-150 relative">
        <img
          src="/src/assets/images/blue-bg.jpg"
          alt="shopping cart with cereals"
          className="h-full w-full rounded-b-4xl"
        />

        <h1 className="absolute top-[30%] left-[18%] cursor-default text-white font-bold text-12xl">Products</h1>
      </div>

      <Breadcrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 space-y-6">
          Aside
        </aside>

        {/* Product Grid */}
        <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          content
        </section>
      </div>
    </div>
  );
}
