import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  // Interview Form States
  const [candidateName, setCandidateName] = useState("");
  const [candidateEmail, setCandidateEmail] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [interviewer, setInterviewer] = useState("");

  // Upcoming Interviews State
  const [upcomingInterviews, setUpcomingInterviews] = useState([]);

  // Carousel Slides
  const carouselSlides = [
    {
      title: "Schedule Interviews Easily",
      description:
        "Quickly organize candidate interviews with simple scheduling tools.",
    },
    {
      title: "Track Upcoming Interviews",
      description:
        "Stay updated with all scheduled interviews in one smart dashboard.",
    },
    {
      title: "Access Smart Preparation Resources",
      description:
        "Get interview-specific preparation links instantly for better readiness.",
    },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
    }

    fetchUpcomingInterviews();
  }, []);

  // Auto Carousel Slide Change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % carouselSlides.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const fetchUpcomingInterviews = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/interview/upcoming"
      );

      setUpcomingInterviews(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleSchedule = async (e) => {
    e.preventDefault();

    if (
      !candidateName ||
      !candidateEmail ||
      !interviewDate ||
      !interviewTime ||
      !interviewType ||
      !interviewer
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/interview", {
        candidateName,
        candidateEmail,
        interviewDate,
        interviewTime,
        interviewType,
        interviewer,
      });

      alert("Interview Scheduled Successfully ✅");

      setCandidateName("");
      setCandidateEmail("");
      setInterviewDate("");
      setInterviewTime("");
      setInterviewType("");
      setInterviewer("");

      fetchUpcomingInterviews();
    } catch (error) {
      alert("Error scheduling interview");
    }
  };

  // UPDATED Resource Mapping Function
  const getResourceLink = (type) => {
    if (type === "Frontend Development") {
      return {
        label: "React Docs",
        url: "https://react.dev/",
      };
    } else if (type === "Backend Development") {
      return {
        label: "Node.js Docs",
        url: "https://nodejs.org/en/docs",
      };
    } else if (type === "Full Stack Development") {
      return {
        label: "Full Stack Guide",
        url: "https://www.freecodecamp.org/",
      };
    } else {
      return {
        label: "Behavioral Interview Guide",
        url: "https://www.indeed.com/career-advice/interviewing/behavioral-interview-questions",
      };
    }
  };

  // NEW Badge Color Function
  const getBadgeColor = (type) => {
    if (type === "Frontend Development") {
      return "bg-blue-100 text-blue-700";
    } else if (type === "Backend Development") {
      return "bg-green-100 text-green-700";
    } else if (type === "Full Stack Development") {
      return "bg-purple-100 text-purple-700";
    } else {
      return "bg-pink-100 text-pink-700";
    }
  };

  // FAQ Data
  const faqs = [
    {
      question: "How do I schedule an interview?",
      answer:
        "Fill out candidate details, choose interview type and interviewer, then click Schedule Interview.",
    },
    {
      question: "How can I view upcoming interviews?",
      answer:
        "All scheduled upcoming interviews appear in the Upcoming Interviews section on the dashboard.",
    },
    {
      question: "Can I filter interviews by type?",
      answer:
        "Yes, go to My Interviews page and use the interview type dropdown filter.",
    },
    {
      question: "How do preparation resources work?",
      answer:
        "Each interview type automatically shows a relevant preparation link based on selected category.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-4 md:px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">
          MeetConnect
        </h1>

        {/* Navigation Menu */}
        <div className="hidden md:flex gap-6 font-medium text-gray-700">
          <button
            onClick={() => navigate("/dashboard")}
            className="hover:text-blue-600 transition"
          >
            Schedule
          </button>

          <button
            onClick={() => navigate("/my-interviews")}
            className="hover:text-blue-600 transition"
          >
            My Interviews
          </button>

          <button
            onClick={() => navigate("/resources")}
            className="hover:text-blue-600 transition"
          >
            Practice Resource
          </button>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-blue-500 hover:bg-blue-600 transition duration-300 text-white px-4 py-2 rounded-lg shadow-md"
          >
            Profile
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg border z-10">
              <button
                onClick={() => navigate("/profile")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                My Profile
              </button>

              <button
                onClick={() => navigate("/about")}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100"
              >
                About
              </button>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 md:px-12 shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to MeetConnect Dashboard
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Schedule, manage, and prepare for interviews efficiently — all in
            one place.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white text-center py-12 px-6 transition-all duration-500">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {carouselSlides[currentSlide].title}
            </h2>
            <p className="text-lg text-blue-100">
              {carouselSlides[currentSlide].description}
            </p>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 py-4 bg-white">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full ${
                  currentSlide === index
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 md:p-8">
        {/* Schedule Form */}
        <form
          onSubmit={handleSchedule}
          className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
            Schedule Interview
          </h2>

          <input
            type="text"
            placeholder="Candidate Name"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Candidate Email"
            value={candidateEmail}
            onChange={(e) => setCandidateEmail(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <input
            type="date"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <input
            type="time"
            value={interviewTime}
            onChange={(e) => setInterviewTime(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          />

          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          >
            <option value="">Select Interview Type</option>
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

          <select
            value={interviewer}
            onChange={(e) => setInterviewer(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg"
          >
            <option value="">Choose Interviewer</option>
            <option value="John Smith">John Smith</option>
            <option value="Sarah Lee">Sarah Lee</option>
            <option value="Alex Kumar">Alex Kumar</option>
          </select>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 transition duration-300 text-white py-3 rounded-lg shadow-md"
          >
            Schedule Interview
          </button>
        </form>

        {/* Upcoming Interviews */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">
            Upcoming Interviews
          </h2>

          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : upcomingInterviews.length === 0 ? (
            <p>No upcoming interviews found.</p>
          ) : (
            upcomingInterviews.map((interview) => {
              const resource = getResourceLink(interview.interviewType);

              return (
                <div
                  key={interview._id}
                  className="border border-gray-200 rounded-2xl p-5 mb-5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-xl text-gray-800">
                      {interview.candidateName}
                    </h3>

                    <span
                      className={`px-3 py-1 text-sm font-semibold rounded-full ${getBadgeColor(
                        interview.interviewType
                      )}`}
                    >
                      {interview.interviewType}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-1">
                    {interview.candidateEmail}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-3">
                    <p>
                      <span className="font-semibold">Date:</span>{" "}
                      {interview.interviewDate}
                    </p>
                    <p>
                      <span className="font-semibold">Time:</span>{" "}
                      {interview.interviewTime}
                    </p>
                    <p className="col-span-2">
                      <span className="font-semibold">Interviewer:</span>{" "}
                      {interview.interviewer}
                    </p>
                  </div>

                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-lg transition"
                  >
                    Preparation Resource →
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* FAQ Accordion */}
      <section className="px-4 md:px-8 pb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden shadow-sm"
              >
                <button
                  onClick={() =>
                    setActiveFAQ(activeFAQ === index ? null : index)
                  }
                  className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 font-semibold flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-xl">
                    {activeFAQ === index ? "-" : "+"}
                  </span>
                </button>

                {activeFAQ === index && (
                  <div className="px-6 py-4 text-gray-700 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-600 text-sm mt-6">
        © 2026 MeetConnect. All rights reserved.
      </footer>
    </div>
  );
}

export default Dashboard;