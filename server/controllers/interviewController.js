import Interview from "../models/Interview.js";

// Save Interview Controller
export const createInterview = async (req, res) => {
  try {
    const {
      candidateName,
      candidateEmail,
      interviewDate,
      interviewTime,
      interviewType,
      interviewer,
    } = req.body;

    if (
      !candidateName ||
      !candidateEmail ||
      !interviewDate ||
      !interviewTime ||
      !interviewType ||
      !interviewer
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newInterview = new Interview({
      userId: req.user.id,
      candidateName,
      candidateEmail,
      interviewDate,
      interviewTime,
      interviewType,
      interviewer,
    });

    await newInterview.save();

    res.status(201).json({
      message: "Interview scheduled successfully ✅",
      interview: newInterview,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// GET Upcoming Interviews
export const getUpcomingInterviews = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    const interviews = await Interview.find({
      userId: req.user.id,
      interviewDate: { $gte: today },
    }).sort({ interviewDate: 1 });

    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// GET Completed Interviews
export const getCompletedInterviews = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    let interviews = await Interview.find({
      userId: req.user.id,
      interviewDate: { $lt: today },
    }).sort({ interviewDate: -1 });

    interviews = interviews.map((interview) => {
      if (
        interview.feedback === "Pending feedback" &&
        interview.score === 0 &&
        interview.result === "Pending"
      ) {
        interview.feedback = "Good performance in interview";
        interview.score = 8;
        interview.result = "Selected";
      }

      return interview;
    });

    res.status(200).json(interviews);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
