import { useState } from "react";

function Resources() {
  const allQuestions = [
    {
      id: 1,
      type: "Frontend Development",
      question: "Explain React useEffect hook.",
    },
    {
      id: 2,
      type: "Frontend Development",
      question: "What is Virtual DOM in React?",
    },
    {
      id: 3,
      type: "Backend Development",
      question: "What is Node.js?",
    },
    {
      id: 4,
      type: "Backend Development",
      question: "Explain Express.js middleware.",
    },
    {
      id: 5,
      type: "Full Stack Development",
      question: "Difference between frontend and backend?",
    },
    {
      id: 6,
      type: "Full Stack Development",
      question: "How does JWT authentication work?",
    },
    {
      id: 7,
      type: "Behavioral",
      question: "Tell me about yourself.",
    },
    {
      id: 8,
      type: "Behavioral",
      question: "Why should we hire you?",
    },
    {
      id: 9,
      type: "Frontend Development",
      question: "What is Tailwind CSS?",
    },
    {
      id: 10,
      type: "Backend Development",
      question: "What is MongoDB collection?",
    },
    {
      id: 11,
      type: "Full Stack Development",
      question: "Difference between SQL and NoSQL?",
    },
    {
      id: 12,
      type: "Behavioral",
      question: "Describe a challenge you faced.",
    },
  ];

  const blogs = [
    "Top 10 React Interview Tips",
    "How to Crack Behavioral Interviews",
    "MongoDB Beginner Guide",
    "Master Node.js Fast",
  ];

  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const questionsPerPage = 10;

  const filteredQuestions =
    filter === "All"
      ? allQuestions
      : allQuestions.filter((q) => q.type === filter);

  const indexOfLast = currentPage * questionsPerPage;
  const indexOfFirst = indexOfLast - questionsPerPage;

  const currentQuestions = filteredQuestions.slice(
    indexOfFirst,
    indexOfLast
  );

  const totalPages = Math.ceil(
    filteredQuestions.length / questionsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          Practice Resources
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Left Section */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">

            {/* Filter Dropdown */}
            <div className="mb-6">
              <select
                value={filter}
                onChange={(e) => {
                  setFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full p-3 border rounded-lg"
              >
                <option value="All">All Questions</option>
                <option value="Frontend Development">
                  Frontend Development
                </option>
                <option value="Backend Development">
                  Backend Development
                </option>
                <option value="Full Stack Development">
                  Full Stack Development
                </option>
                <option value="Behavioral">Behavioral</option>
              </select>
            </div>

            {/* Questions List */}
            <div className="space-y-4">
              {currentQuestions.map((q) => (
                <div
                  key={q.id}
                  className="p-4 border rounded-lg bg-gray-50"
                >
                  <p className="font-semibold text-green-600">
                    {q.type}
                  </p>
                  <p>{q.question}</p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
              >
                Prev
              </button>

              <span className="font-bold mt-2">
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>

          {/* Blog Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-purple-600 mb-4">
              Interview Blogs
            </h2>

            <div className="space-y-4">
              {blogs.map((blog, index) => (
                <div
                  key={index}
                  className="p-3 border rounded-lg bg-gray-50"
                >
                  {blog}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600 mt-8">
        © 2026 MeetConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default Resources;