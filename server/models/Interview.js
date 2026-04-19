import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    candidateName: {
      type: String,
      required: true,
    },

    candidateEmail: {
      type: String,
      required: true,
    },

    interviewDate: {
      type: String,
      required: true,
    },

    interviewTime: {
      type: String,
      required: true,
    },

    interviewType: {
      type: String,
      required: true,
    },

    interviewer: {
      type: String,
      required: true,
    },

    feedback: {
      type: String,
      default: "Pending feedback",
    },

    score: {
      type: Number,
      default: 0,
    },

    result: {
      type: String,
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Interview = mongoose.model("Interview", interviewSchema);

export default Interview;
