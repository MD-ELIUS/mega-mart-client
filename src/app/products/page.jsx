"use client";

import LoadingData from "@/components/shared/LoadingData";
import ProductCard from "@/components/shared/ProductCard";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true) ;

  useEffect(() => {
    fetch("https://mega-mart-api-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {setProducts(data), setLoading(false)}  );
  }, []);

  const categories = ["All", "Sofa", "Table", "Chair", "Bed", "Cabinet"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen py-12 px-6 md:px-12 bg-base-100">
      
      {/* Page Title + Description */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
          Our Furniture Collection
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg md:text-xl font-semibold max-w-2xl mx-auto">
          Explore our wide range of premium furniture
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full md:w-1/2 px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
       
      {
  loading ? (
    <LoadingData />
  ) : filteredProducts.length === 0 ? (
    <div className="text-center mt-10 space-y-4">
      <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-300">
        No products found. Please refresh your page or add new product.
      </p>
      <Link
        href="/add-product"
        className="btn btn-primary rounded-full"
      >
        + Add New Product
      </Link>
    </div>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} {...product} />
      ))}
    </div>
  )
}


    
    </div>
  );
}
