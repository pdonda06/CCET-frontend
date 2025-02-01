function Services() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Video and CTA */}
          <div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg text-lg mb-6">
              Go to Plans
            </button>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <video
                className="w-full rounded-lg"
                src="/path/to/video.mp4"
                controls
              ></video>
            </div>
          </div>
          {/* Information Section */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800">
              Guiding You Towards Your Dream College & Career
            </h1>
            <p className="mt-6 text-gray-600">
              Our counseling and mentorship services are designed to help you
              navigate the challenges of college admissions and chart a
              successful career path. Whether you’re aiming for top universities
              or exploring career opportunities, we provide personalized
              guidance every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Here is all you need to know about our Counseling Services
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Student Mentorship",
            "Parental Counseling",
            "College & Course Selection",
            "Comprehensive Planning",
            "Emotional Support",
            "College Shortlisting",
          ].map((title, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-full shadow-lg text-center"
            >
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-sm mt-2">
                Detailed information about {title.toLowerCase()} goes here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Combo Plans Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Combo Plans
          </h2>
          <p className="text-gray-600">
            Choose the plan that suits your needs and start your journey toward
            success today!
          </p>
        </div>
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Basic Plan",
              price: "₹999",
              description: "College Admission Counseling",
            },
            {
              name: "Advanced Plan",
              price: "₹4999",
              description: "Career Guidance & Mentorship",
            },
            {
              name: "Premium Plan",
              price: "₹9999",
              description: "Personalized Comprehensive Plan",
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-indigo-600"
            >
              <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
              <p className="text-gray-600 mt-2">{plan.description}</p>
              <div className="text-2xl font-bold text-indigo-600 mt-4">
                {plan.price}
              </div>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
