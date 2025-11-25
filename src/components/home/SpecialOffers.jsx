"use client";

import Image from "next/image";

export default function SpecialOffers() {
  const offers = [
    {
      title: "Modern Wooden Chair",
      oldPrice: 4500,
      newPrice: 3200,
      img: "/chair.jpg",
      discount: "29% OFF",
    },
    {
      title: "Premium Sofa",
      oldPrice: 15000,
      newPrice: 11900,
      img: "/sofa.jpg",
      discount: "21% OFF",
    },
    {
      title: "Luxury Bed",
      oldPrice: 28000,
      newPrice: 23900,
      img: "/bed.jpg",
      discount: "15% OFF",
    },
  ];

  return (
    <section className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Special Offers 🔥
      </h2>

      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Grab the best deals of the week! Limited stock — shop before the offer ends.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((item, i) => (
          <div
            key={i}
            className="border border-primary/20 rounded-lg p-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white"
          >
            <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>

            <h3 className="font-semibold text-lg text-[#1f1f1f]">{item.title}</h3>

            <div className="flex items-center gap-2 mt-2">
              <p className="text-primary font-bold text-xl">৳ {item.newPrice}</p>
              <p className="line-through text-gray-500">৳ {item.oldPrice}</p>
            </div>

            <span className="inline-block mt-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
              {item.discount}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
