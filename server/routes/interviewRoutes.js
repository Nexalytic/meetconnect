import express from "express";
import {
  createInterview,
  getUpcomingInterviews,
  getCompletedInterviews,
} from "../controllers/interviewController.js";

const router = express.Router();

// POST Interview Route
router.post("/", createInterview);

// GET Upcoming Interviews
router.get("/upcoming", getUpcomingInterviews);

// GET Completed Interviews
router.get("/completed", getCompletedInterviews);

export default router;