const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  upvotes: { type: Number },
  status: { type: String, required: true },
  description: { type: String, required: true },
  likes: [{ type: String }],
  comments: [],
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
