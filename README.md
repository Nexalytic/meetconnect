````md id="i0zhp6"
# MeetConnect – Mock Interview Scheduling Platform

MeetConnect is a full-stack web application built to help students schedule, manage, and prepare for mock interviews through a clean and responsive user experience.

It allows users to create accounts, log in securely, schedule interviews, track upcoming/completed interviews, manage their personal profile, and access interview preparation resources.

---

## Live Project Links

### Frontend (Netlify)
https://meetconnect-frontend.netlify.app

### Backend API (Render)
https://meetconnect-backend-lon4.onrender.com/

---

## Key Features

### User Authentication
- Secure Signup and Login system
- JWT Token-based authentication
- Multi-user support
- Protected routes

### Dashboard
- Schedule mock interviews
- Choose interview type
- Select interviewer
- Pick date and time
- View upcoming interviews instantly

### My Interviews
- View Upcoming Interviews
- View Completed Interviews
- Interview cards with details
- Filter by interview type

### My Profile
- View personal profile
- Update Name
- Update Contact Number
- Update Date of Birth
- Email remains read-only

### Practice Resources
- Interview preparation resources based on category

### Responsive UI
- Mobile friendly
- Modern clean design
- Smooth navigation

---

## Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Deployment
- Netlify (Frontend)
- Render (Backend)

---

## Project Structure

```bash
client/
 ├── src/
 │   ├── pages/
 │   ├── components/
 │   └── App.jsx

server/
 ├── controllers/
 ├── models/
 ├── routes/
 └── server.js
````

---

## API Endpoints

### Auth Routes

* POST `/api/auth/signup`
* POST `/api/auth/login`
* GET `/api/auth/profile`
* PUT `/api/auth/profile`

### Interview Routes

* POST `/api/interview`
* GET `/api/interview/upcoming`
* GET `/api/interview/completed`

---

## Multi User Functionality

MeetConnect fully supports multiple users.

Each user gets:

* Separate interview records
* Separate profile details
* Secure login sessions
* Personal dashboard data

---

## Installation (Local Setup)

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

## Environment Variables

Create `.env` inside server folder:

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Screens Included

* Login Page
* Signup Page
* Dashboard
* My Interviews
* Profile
* Practice Resources

---

## Purpose of Project

This project was built as a capstone project to demonstrate real-world Full Stack Web Development skills including:

* Frontend Development
* Backend API Development
* Authentication
* Database Integration
* Deployment
* Responsive Design
* CRUD Operations

---

## Future Improvements

* Google Login
* Email Notifications
* Interview Reminders
* Admin Panel
* Real Interviewer Booking
* Resume Upload
* AI Interview Feedback

---

## Author

Developed by Deepak Raj

---

## Final Status

Production Ready
Fully Deployed
Multi User Working
Frontend + Backend Live

```
```
