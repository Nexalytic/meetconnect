import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password || !phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      const res = await fetch("https://meetconnect-backend-lon4.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
        }),
      });

      const data = await res.json();

      alert(data.message);

      // Redirect to login if success
      if (res.status === 201) {
        window.location.href = "/login";
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        {/* Branding Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600 mb-2">
            MeetConnect
          </h1>
          <p className="text-gray-600 text-lg">
            Create your account and get started
          </p>
        </div>

        {/* Signup Card */}
        <form
          onSubmit={handleSignup}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Signup
          </h2>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-4 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Create your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 mb-5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-4 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg"
          >
            Signup
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer hover:underline"
              onClick={() => (window.location.href = "/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
