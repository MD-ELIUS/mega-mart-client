
"use client";

import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-primary mb-6"></div>

      {/* Loading text */}
      <p className="text-xl font-semibold text-[#1f1f1f] mb-2 text-center">
        Loading your page...
      </p>
      <p className="text-sm text-gray-500 text-center">
        Thank you for your patience
      </p>
    </div>
  );
};

export default Loading;
