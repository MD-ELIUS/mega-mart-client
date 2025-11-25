"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../shared/ProductCard";
import LoadingData from "../shared/LoadingData";
import Link from "next/link";


export default function FeaturedProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true) ;

  useEffect(() => {
    // fetch product data from public folder
    fetch("https://mega-mart-api-server.vercel.app/latest-products")
      .then((res) => res.json())
      .then((data) => {setProducts(data), setLoading(false)})
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <section className="my-12 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Featured Products
        </h2>

        {
          loading ? (<LoadingData></LoadingData>) : 
          
          products.length === 0 ? (
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
  ) :
          
          
          (
            <>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
            </>
          )
        }

       
      </div>
    </section>
  );
}
