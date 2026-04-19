import express from "express";
import {
  createInterview,
  getUpcomingInterviews,
  getCompletedInterviews,
} from "../controllers/interviewController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// POST Interview Route
router.post("/", protect, createInterview);

// GET Upcoming Interviews
router.get("/upcoming", protect, getUpcomingInterviews);

// GET Completed Interviews
router.get("/completed", protect, getCompletedInterviews);

export default router;
