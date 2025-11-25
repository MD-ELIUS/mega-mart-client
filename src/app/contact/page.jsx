import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export const metadata = {
  title: "Contact | MegaMart",
};

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen py-12 px-6 md:px-12 bg-base-100">

      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg md:text-xl font-semibold max-w-2xl mx-auto leading-relaxed">
          We’d love to hear from you! Whether you have questions about products,
          orders, or support — our team is always ready to assist.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">

        {/* Phone */}
        <div className="p-8 bg-white border border-primary/20 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <FiPhone className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">+1 (234) 567-890</p>
        </div>

        {/* Email */}
        <div className="p-8 bg-white border border-primary/20 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <FiMail className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">support@megamart.com</p>
        </div>

        {/* Address */}
        <div className="p-8 bg-white border border-primary/20 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
          <FiMapPin className="text-primary text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary mb-2">Address</h3>
          <p className="text-gray-600 dark:text-gray-300">
            123 Market Street, California, USA
          </p>
        </div>

      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white border border-primary/20 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">
          Send Us a Message
        </h2>

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-2 border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg font-medium text-lg hover:bg-primary/90 transition-all duration-200 shadow-md"
          >
            Send Message
          </button>

        </form>
      </div>

    </div>
  );
}
