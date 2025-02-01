function Blogs() {
  return (
    <div className="font-sans">

      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">BLOGS</h1>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800">Welcome to Our Blog!</h2>
          <p className="text-gray-600 mt-4">
            Stay updated with regularly published blogs featuring tips, advice, and the latest news on college admissions and entrance exams.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg">
            See Articles
          </button>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "A Complete Guide to CUET: What You Need to Know", color: "bg-pink-100" },
              { title: "Top CUET Preparation Tips for 2025", color: "bg-yellow-100" },
              { title: "How CUET Will Impact Your College Admissions", color: "bg-blue-100" },
              { title: "Top Mistakes to Avoid While Preparing for IIT JEE", color: "bg-orange-100" },
              { title: "How to Manage Stress During IIT JEE Advanced", color: "bg-purple-100" },
              { title: "Effective Strategies for Cracking JEE Advanced", color: "bg-green-100" },
              { title: "Time Management Tips for NEET Aspirants", color: "bg-teal-100" },
              { title: "The Importance of Mock Tests in NEET Preparation", color: "bg-red-100" },
              { title: "How to Choose the Right NEET Coaching Institute", color: "bg-indigo-100" },
            ].map((article, idx) => (
              <div key={idx} className={`${article.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow`}>
                <h3 className="text-xl font-bold text-gray-800">{article.title}</h3>
                <p className="text-gray-600 mt-2">
                  Explore tips and strategies to excel in your preparation.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counseling Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Unlock Your Full Potential with Expert Counseling</h2>
          <p className="text-gray-600 mt-4">
            Our expert counseling services are here to guide you every step of the way.
          </p>
          <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg">
            Get Started
          </button>
        </div>
      </section>

    </div>
  );
}

export default Blogs;
