function About() {
  const founders = [
    {
      name: "Arjun Mehta",
      role: "Co-Founder & CEO",
      desc: "Visionary leader driving MeetConnect’s mission to simplify interview scheduling.",
    },
    {
      name: "Priya Sharma",
      role: "Co-Founder & CTO",
      desc: "Technology strategist building scalable and user-friendly interview platforms.",
    },
  ];

  const investors = [
    "Future Ventures Capital",
    "InnovateX Partners",
    "NextGen Startup Fund",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-600 mb-4">
          About MeetConnect
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Revolutionizing interview scheduling with smarter workflows,
          better preparation tools, and seamless recruiter-candidate experiences.
        </p>
      </div>

      {/* Company Intro Card */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10 mb-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Who We Are
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          MeetConnect is a smart interview scheduling platform designed to help
          recruiters and candidates manage interviews efficiently.
          <br /><br />
          It allows users to schedule interviews, track upcoming meetings,
          practice interview questions, and manage their profiles —
          all in one unified platform.
        </p>
      </div>

      {/* Founders Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          Our Co-Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-2">
                {founder.name}
              </h3>
              <p className="text-blue-500 font-semibold mb-4">
                {founder.role}
              </p>
              <p className="text-gray-700">{founder.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Investors Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Our Investors
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {investors.map((investor, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
            >
              <p className="text-lg font-semibold text-gray-700">
                {investor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;