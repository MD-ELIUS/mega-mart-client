"use client";

import React from "react";
import Link from "next/link";
import { FiAlertTriangle, FiArrowLeft } from "react-icons/fi";

export default function ProductNotFound() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-base-100 px-6 text-center">
      
      {/* Icon */}
      <div className="bg-primary/10 p-6 rounded-full mb-6">
        <FiAlertTriangle size={60} className="text-primary" />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Product Not Found
      </h1>

      {/* Message */}
      <p className="text-gray-600 dark:text-gray-300 max-w-lg mb-8">
        The product you are looking for does not exist or may have been removed.
        Please check the link or browse our latest products.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 px-5 py-3 btn btn-primary btn-outline font-medium  transition"
        >
          <FiArrowLeft size={18} />
          Go Back
        </button>

        <Link
          href="/products"
          className="px-5 py-3 btn btn-primary btn-outline font-medium  transition"
        >
          Browse Products
        </Link>
      </div>

    </div>
  );
}
