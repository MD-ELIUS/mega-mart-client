export default function WhyChooseUs() {
  return (
    <section className="w-11/12 mx-auto my-12">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Why Choose MegaMart?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-primary/20 rounded-xl hover:shadow-xl shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
          <p className="text-gray-600">
            We offer hand-picked, carefully inspected products for the best shopping experience.
          </p>
        </div>

        <div className="p-6 border border-primary/20 rounded-xl hover:shadow-xl shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
          <p className="text-gray-600">
            Get your items quickly with our nationwide fast delivery system.
          </p>
        </div>

        <div className="p-6 border border-primary/20 rounded-xl hover:shadow-xl shadow-md hover:-translate-y-1 transition-all duration-300 text-center">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">
            Our support team is always available to help you with anything you need.
          </p>
        </div>
      </div>
    </section>
  );
}
