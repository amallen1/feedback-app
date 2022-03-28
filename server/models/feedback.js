const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: {
    image: { type: String },
    name: { type: String },
    username: { type: String, required: true },
  },
});

const feedbackSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  upvotes: { type: Number },
  status: { type: String, required: true },
  description: { type: String, required: true },
  comments: [commentSchema],
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
