"use client";

import Image from "next/image";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Sofa for Your Living Room",
    img: "https://www.jvfurniture.co.uk/cosmoshop/default/pix/a/n/4067282632530.3.jpg",
    desc: "Learn how to select the right size, fabric, and design to match your home interior perfectly.",
  },
  {
    id: 2,
    title: "2025’s Trending Furniture Styles for Modern Homes",
    img: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    desc: "Explore the latest furniture trends including minimal, Scandinavian, and natural wood designs.",
  },
  {
    id: 3,
    title: "Smart Tips for Buying Long-Lasting Wooden Furniture",
    img: "https://www.artisanfurniture.net/news/wp-content/uploads/2025/01/durable_wood_for_furniture.jpg",
    desc: "Understand wood quality, durability, and build techniques before making your next purchase.",
  },
];

export default function BlogSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleReadMore = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Latest From Our Blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="p-6 border border-primary/20 rounded-xl hover:shadow-xl shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="rounded-lg overflow-hidden mb-4">
              <Image
                src={post.img}
                alt={post.title}
                width={400}
                height={400}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">{post.title}</h3>
            <p className="text-gray-600 mb-3">
              {expandedIds.includes(post.id)
                ? post.desc
                : post.desc.length > 80
                ? post.desc.slice(0, 80) + "..."
                : post.desc}
            </p>
            <button
              className="text-primary font-semibold hover:underline"
              onClick={() => toggleReadMore(post.id)}
            >
              {expandedIds.includes(post.id) ? "Show Less ↑" : "Read More →"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
