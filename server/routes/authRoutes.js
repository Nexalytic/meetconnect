import express from "express";
import {
  signup,
  login,
  getProfile,
  updateProfile,
} from "../controllers/authController.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Get Profile
router.get("/profile", getProfile);

// Update Profile
router.put("/profile", updateProfile);

export default router;
