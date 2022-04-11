const mongoose = require("mongoose");

// const commentSchema = new mongoose.Schema({
//   content: { type: String },
//   user: {
//     image: { type: String },
//     name: { type: String },
//     username: { type: String },
//   },
// });

const feedbackSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  upvotes: { type: Number },
  status: { type: String, required: true },
  description: { type: String, required: true },
  comments: [],
  //  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
});

const Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
