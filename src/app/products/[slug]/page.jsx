"use client";

import React, { useEffect, useState} from "react";
import { useRouter, useParams } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";

import Image from "next/image";

// Icons
import { FiArrowLeft, FiCalendar, FiTag } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";

import ProductNotFound from "@/components/shared/ProductNotFound";
import LoadingData from "@/components/shared/LoadingData";

export default function ProductPage() {
  const routeParams = useParams();
  const productSlug = routeParams.slug; // e.g., 'modern-sofa-set'
  const [loading, setLoading] = useState(true)

  const router = useRouter();
  const [product, setProduct] = useState(null);

  // Fetch product data using the new slug API
  useEffect(() => {
   
    // 💡 CHANGE: Construct the API URL using the productSlug
    fetch(`https://mega-mart-api-server.vercel.app/products/${productSlug}`)
      .then((res) => {
        // Check for 404 or other errors
        if (!res.ok) {
          throw new Error('Product not found or server error');
        }
        return res.json();
      })
      .then((data) => {
        // 💡 CHANGE: The API now returns the single product directly (or an error)
        setProduct(data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false)
        setProduct(null); // Explicitly set to null on error
      });
  }, [productSlug]); // Removed 'router' from dependencies as it's not needed for the fetch



  // Consolidated loading check: if product is null, show loading


    if(loading) return <LoadingData></LoadingData>

      if (!product) return <ProductNotFound/>;

  // Note: Data format assumption is that dates and prices are strings from JSON/MongoDB

  return (
    // 💡 Added max-w-7xl and mx-auto for better centering (you had max-w-11/12)
    <div className="max-w-7xl mx-auto min-h-screen bg-base-100 pb-16 px-4 sm:px-6 lg:px-8"> 
      

      {/* Back Button */}
      <div className=" cursor-pointer mt-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary font-medium hover:underline cursor-pointer"
        >
          <FiArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Product Details Section */}
      <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Product Image */}
        <div className="w-full">
          <Image
            src={product.img}
            alt={product.title}
            width={700}
            height={500}
            // Use layout="responsive" if using older Next.js, but with Next/Image 13+, width/height are preferred
            className="rounded-xl shadow-lg object-cover w-full"
            priority // Optional: loads image faster as it's above the fold
          />
        </div>

        {/* Product Information */}
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {product.title}
          </h2>

          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed mb-6">
            {product.description}
          </p>
        </div>
      </div>

      {/* Meta Info Box Group */}
      <div className="mt-8">
        
        {/* Price and Date Row */}
        <div className="bg-white border border-primary/20 rounded-xl p-6 shadow-md hover:shadow-xl my-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
           <div className="flex flex-col">
             {/* Price */}
            <div className="flex items-center gap-2 mb-3 sm:mb-0">
              <FiTag size={20} className="text-primary" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                <span className="font-semibold">Price:</span>{" "}
                {/* ⚠️ Ensure product.price is handled safely */}
                <span className="text-primary font-bold">${product.price}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 mb-3 sm:mb-0">
              <BiCategoryAlt size={20} className="text-primary" />
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                <span className="font-semibold">Category:</span>{" "}
                {/* ⚠️ Ensure product.price is handled safely */}
                <span className="text-primary font-bold">{product.category}</span>
              </p>
            </div>
           </div>

            {/* Added Date */}
            <div className="flex items-center gap-2">
              <FiCalendar size={20} className="text-primary" />
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Added:</span>{" "}
                {/* Use optional chaining on nested properties */}
               {new Date(product.date_added).toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric",
})}

              </p>
            </div>
          </div>
        </div>

     {/* Added By */}
          <div className=" flex flex-col md:justify-between md:items-center md:flex-row gap-2 bg-white border border-primary/20 rounded-xl p-6 shadow-md hover:shadow-xl ">
            <div>
               <p className=' font-medium'>Added by</p>
            </div>
            <div className='flex items-center gap-3'>
                <Image
              src={product.user_photo ? product.user_photo : "/avatar.png"}
              width={100}
            height={100}
              alt="Posted By"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-primary object-cover"
            />
            <div>
              <p className="font-semibold text-secondary text-base sm:text-lg">
                {product.user_name || "Unknown User"}
              </p>
              <p className="text-sm text-secondary/70">
                {product.email || "No email available"}
              </p>
            </div>
            </div>
          </div>

      </div>
    </div>
  );
}