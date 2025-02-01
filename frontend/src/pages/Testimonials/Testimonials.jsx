function Testimonial() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">TESTIMONIAL.</h1>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <h2 className="text-2xl font-bold">Robert Julian</h2>
            <p className="text-gray-500 mt-2">Director & Head Counsellor</p>
            <p className="text-gray-500 mt-4">
              Clinical Psychologist | Master’s in Counseling | 12-15 years of experience
            </p>
            <img
              src="/path/to/director-image.jpg"
              alt="Robert Julian"
              className="w-40 h-40 rounded-full mt-4 shadow-md"
            />
          </div>
          <div className="mt-6 flex space-x-4">
            {[
              { platform: "Instagram", link: "#" },
              { platform: "Facebook", link: "#" },
              { platform: "LinkedIn", link: "#" },
              { platform: "YouTube", link: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Top Reviews */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">TOP REVIEWS</h2>
          <p className="text-gray-500 mt-2">Take a look at reviews from our users.</p>
        </div>
        <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Aditya Verma",
              review: "The guidance I received from the counselors made my preparation much easier!",
              rating: "4.5/5",
            },
            {
              name: "Riya Sharma",
              review: "With personalized guidance, I secured admission to my dream college!",
              rating: "4.8/5",
            },
            {
              name: "Shalini Jha",
              review: "The counselors provided clarity and motivation for my career goals.",
              rating: "4.9/5",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold text-gray-800">{review.name}</h3>
              <p className="text-gray-500 mt-2">{review.review}</p>
              <div className="mt-4 text-indigo-500 font-bold">{review.rating}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey to Success */}
      <section className="py-16 px-8 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800">JOURNEY TO SUCCESS</h2>
          <p className="text-gray-500 mt-2">
            Take a look at some of the success stories from our past learners!
          </p>
        </div>
        <div className="mt-12 max-w-6xl mx-auto flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-6">
          {[
            {
              name: "Riya Sharma",
              title: "Cracked JEE Advanced",
              description: "Received expert mentorship and personalized study plans to achieve my dream.",
            },
            {
              name: "Ankit Verma",
              title: "Cleared NEET",
              description: "Guidance and mock tests helped me excel in one of the toughest exams.",
            },
            {
              name: "Priya Subhash",
              title: "Top University Admission",
              description: "With expert counseling, I achieved admission into my dream university.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-bold">{story.name}</h3>
              <p className="mt-2 font-semibold">{story.title}</p>
              <p className="mt-4">{story.description}</p>
              <button className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg">
                See More
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg">
            Share Your Own Success Story
          </button>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
