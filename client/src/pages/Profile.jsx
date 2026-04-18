import { useState, useEffect } from "react";

function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDob] = useState("");

  useEffect(() => {
    const savedName =
      localStorage.getItem("userName") || "Deepak Raj";
    const savedEmail =
      localStorage.getItem("userEmail") || "deepak@test.com";
    const savedContact =
      localStorage.getItem("userContact") || "9876543210";
    const savedDob =
      localStorage.getItem("userDOB") || "2000-01-01";

    setName(savedName);
    setEmail(savedEmail);
    setContact(savedContact);
    setDob(savedDob);
  }, []);

  const handleSave = () => {
    localStorage.setItem("userName", name);
    localStorage.setItem("userContact", contact);
    localStorage.setItem("userDOB", dob);

    alert("Profile updated successfully ✅");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Brand Header */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-blue-600 mb-2">
            MeetConnect
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your personal profile details
          </p>
        </div>

        {/* Profile Card */}
        <div className="bg-white shadow-2xl rounded-3xl p-8 border border-gray-100">
          {/* Avatar */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            My Profile
          </h2>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              readOnly
              className="w-full p-4 border border-gray-200 rounded-xl bg-gray-100 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Contact */}
          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* DOB */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full bg-green-500 text-white py-4 rounded-xl hover:bg-green-600 shadow-lg hover:shadow-xl transition duration-300 font-semibold text-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;