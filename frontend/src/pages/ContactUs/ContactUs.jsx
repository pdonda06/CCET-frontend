function ContactUs() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-extrabold">CONTACT US</h1>
          <p className="text-lg mt-4">
            Have questions or need personalized guidance? We're here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Whether you have questions, need expert advice, or want to explore
              collaboration opportunities, we’d love to hear from you.
            </p>
            <div className="mt-6 space-y-4 text-gray-800 font-medium">
              <p>
                <strong>Email:</strong> support@careercounseling.com
              </p>
              <p>
                <strong>Phone:</strong> +123-456-7890
              </p>
              <p>
                <strong>Address:</strong> Sunrise Colony, West District, New
                Delhi, India
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <img
              src="/path/to/contact-image.jpg"
              alt="Contact Us"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Social Media & Office Hours */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-blue-600 text-2xl">
                Instagram
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                Facebook
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                LinkedIn
              </a>
              <a href="#" className="text-blue-600 text-2xl">
                Twitter
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
            <p className="text-gray-600 mt-4">
              Monday to Friday: 9:00 AM - 6:00 PM (Local Time)
            </p>
            <p className="text-gray-600 mt-2">Looking forward to assisting you!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
