import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | MegaMart",
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen py-12 px-6 md:px-12 bg-base-100">

      {/* Page Title */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
          About Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
          We are committed to offering premium-quality products 
        </p>
      </div>

      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/store.png"
              alt="MegaMart Storefront"
              width={600}
              height={400}
              className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">
            At MegaMart, our mission is to deliver high-quality, innovative products that elevate your lifestyle. From smart gadgets to stylish furniture, we provide reliable and modern solutions for your everyday needs.
          </p>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            With a focus on sustainability, customer satisfaction, and continuous innovation, we aim to create a smooth, enjoyable, and trustworthy shopping experience.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 ">
        
        <div className="p-8 border border-primary/20 rounded-xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-primary mb-3">Quality First</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            Premium quality is at the heart of everything we offer — carefully curated products you can trust.
          </p>
        </div>

        <div className="p-8 border border-primary/20 rounded-xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-primary mb-3">Customer Care</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            Our support team is dedicated to ensuring a smooth and satisfying journey from browsing to delivery.
          </p>
        </div>

        <div className="p-8 border border-primary/20 rounded-xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
            We constantly bring modern, efficient, and stylish solutions to enhance everyday life.
          </p>
        </div>

      </div>

  
    </div>
  );
}
