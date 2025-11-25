"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ img, title, description, price, slug }) {
  return (
    <div className="max-w-sm w-full border border-primary/20 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col h-full">
      
      {/* Image */}
      <div className="w-full h-48 rounded-lg overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-lg font-semibold text-gray-900 line-clamp-2">
        {title}
      </h3>

      {/* Short description */}
      <p className="text-sm text-gray-600 mt-1 line-clamp-2 flex-grow">
        {description}
      </p>

      {/* Price + Button */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xl font-bold text-primary">
          ${price}
        </span>

        <Link
          href={`/products/${slug}`}
            onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="btn btn-primary btn-outline px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
