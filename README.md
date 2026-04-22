# MeetConnect – Mock Interview Scheduling Platform

MeetConnect is a full-stack web application built to help students schedule, manage, and prepare for mock interviews through a clean, responsive, and user-friendly platform.

Users can create accounts, securely log in, schedule interviews, track upcoming and completed interviews, manage their personal profile, and access interview preparation resources.

---

## 🌐 Live Project Links

### Frontend (Netlify)

[https://meetconnect-frontend.netlify.app](https://meetconnect-frontend.netlify.app)

### Backend API (Render)

[https://meetconnect-backend-lon4.onrender.com/](https://meetconnect-backend-lon4.onrender.com/)

---

## 🚀 Key Features

### 🔐 User Authentication

* Secure Signup and Login system
* JWT Token-based authentication
* Protected routes
* Multi-user support

### 📊 Dashboard

* Schedule mock interviews
* Select interview type
* Choose interviewer
* Pick interview date and time
* View upcoming interviews instantly

### 📁 My Interviews

* View Upcoming Interviews
* View Completed Interviews
* Filter interviews by type
* Clean interview cards with full details

### 👤 My Profile

* View personal profile
* Update Name
* Update Contact Number
* Update Date of Birth
* Email remains read-only

### 📚 Practice Resources

* Interview preparation resources based on selected category

### 📱 Responsive UI

* Mobile friendly
* Smooth navigation
* Modern clean design

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs

### Deployment

* Netlify (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
meetconnect/
│── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
│
│── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
```

---

## 🔗 API Endpoints

### Authentication Routes

* POST /api/auth/signup
* POST /api/auth/login
* GET /api/auth/profile
* PUT /api/auth/profile

### Interview Routes

* POST /api/interview
* GET /api/interview/upcoming
* GET /api/interview/completed

---

## 👥 Multi User Functionality

MeetConnect fully supports multiple users.

Each user gets:

* Separate interview records
* Separate profile data
* Secure login sessions
* Personal dashboard experience

---

## ⚙️ Installation (Local Setup)

### Clone Repository

```bash
git clone <your-repository-url>
cd meetconnect
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🎯 Purpose of Project

This project was built as a capstone project to demonstrate real-world Full Stack Web Development skills including:

* Frontend Development
* Backend API Development
* Authentication
* Database Integration
* CRUD Operations
* Deployment
* Responsive Design

---

## 🔮 Future Improvements

* Google Login
* Email Notifications
* Interview Reminders
* Admin Panel
* Real Interviewer Booking
* Resume Upload
* AI Interview Feedback

---

## 👨‍💻 Author

**Deepak Raj**

---

## ✅ Final Status

* Production Ready
* Fully Deployed
* Frontend + Backend Live
* Multi User Working
* Capstone Ready
