import { useEffect, useState } from "react";
import axios from "axios";

function MyInterviews() {
  const [filter, setFilter] = useState("upcoming");
  const [typeFilter, setTypeFilter] = useState("all");
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInterviews();
  }, [filter]);

  const fetchInterviews = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const url =
        filter === "upcoming"
          ? "https://meetconnect-backend-lon4.onrender.com/api/interview/upcoming"
          : "https://meetconnect-backend-lon4.onrender.com/api/interview/completed";

      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setInterviews(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Updated Resource Mapping Function
  const getPreparationResource = (type) => {
    if (type === "Frontend Development") {
      return {
        label: "React Docs",
        url: "https://react.dev/",
      };
    }

    if (type === "Backend Development") {
      return {
        label: "Node.js Docs",
        url: "https://nodejs.org/docs/latest/api/",
      };
    }

    if (type === "Full Stack Development") {
      return {
        label: "Full Stack Guide",
        url: "https://www.geeksforgeeks.org/full-stack-development/",
      };
    }

    if (type === "Behavioral") {
      return {
        label: "Behavioral Interview Guide",
        url: "https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions",
      };
    }

    return null;
  };

  // Badge Colors
  const getBadgeColor = (type) => {
    if (type === "Frontend Development") {
      return "bg-blue-100 text-blue-700";
    }

    if (type === "Backend Development") {
      return "bg-green-100 text-green-700";
    }

    if (type === "Full Stack Development") {
      return "bg-purple-100 text-purple-700";
    }

    if (type === "Behavioral") {
      return "bg-pink-100 text-pink-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  // Apply interview type filter
  const filteredInterviews =
    typeFilter === "all"
      ? interviews
      : interviews.filter(
          (interview) => interview.interviewType === typeFilter
        );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-grow p-6 md:p-8">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          My Interviews
        </h1>

        {/* Filters */}
        <div className="max-w-md mx-auto mb-8 space-y-4">
          {/* Upcoming / Completed */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm"
          >
            <option value="upcoming">Upcoming Interviews</option>
            <option value="completed">Completed Interviews</option>
          </select>

          {/* Interview Type Filter */}
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="w-full p-3 border rounded-lg shadow-sm"
          >
            <option value="all">All Types</option>
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

        {/* Loading Spinner */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : filteredInterviews.length === 0 ? (
          <p className="text-center text-gray-600">
            No interviews found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredInterviews.map((interview) => {
              const resource = getPreparationResource(
                interview.interviewType
              );

              return (
                <div
                  key={interview._id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 p-6"
                >
                  {/* Top Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {interview.candidateName}
                      </h2>
                      <p className="text-gray-600 mt-1">
                        {interview.candidateEmail}
                      </p>
                    </div>

                    <span
                      className={`px-4 py-1 rounded-full text-sm font-semibold ${getBadgeColor(
                        interview.interviewType
                      )}`}
                    >
                      {interview.interviewType}
                    </span>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-y-3 text-gray-700 mb-4">
                    <p>
                      <span className="font-semibold text-gray-900">
                        Date:
                      </span>{" "}
                      {interview.interviewDate}
                    </p>

                    <p>
                      <span className="font-semibold text-gray-900">
                        Time:
                      </span>{" "}
                      {interview.interviewTime}
                    </p>

                    <p className="col-span-2">
                      <span className="font-semibold text-gray-900">
                        Interviewer:
                      </span>{" "}
                      {interview.interviewer || "Not Assigned"}
                    </p>
                  </div>

                  {/* Completed Interview Details */}
                  {filter === "completed" && (
                    <div className="bg-gray-50 rounded-xl p-4 mb-4 border">
                      <p className="mb-2">
                        <span className="font-semibold text-gray-900">
                          Feedback:
                        </span>{" "}
                        {interview.feedback}
                      </p>
                      <p className="mb-2">
                        <span className="font-semibold text-gray-900">
                          Score:
                        </span>{" "}
                        {interview.score}/10
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">
                          Result:
                        </span>{" "}
                        {interview.result}
                      </p>
                    </div>
                  )}

                  {/* Resource Button */}
                  {resource && (
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-5 py-3 rounded-xl transition"
                    >
                      Preparation Resource →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600 mt-8">
        © 2026 MeetConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default MyInterviews;
