"use client";

import React from "react";
import { FiLoader } from "react-icons/fi";

export default function LoadingData() {
  return (
    <div className="w-full my-10 flex flex-col items-center justify-center bg-base-100 text-center px-4">
      
      {/* Spinner */}
      <FiLoader 
        className="animate-spin text-primary mb-6"
        size={48}
      />

      {/* Loading Text */}
      <h2 className="text-xl font-semibold text-primary mb-2">
        Loading...
      </h2>

      <p className="text-gray-600 dark:text-gray-300">
        Thank you for your patience
      </p>
    </div>
  );
}
