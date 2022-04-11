const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: {
    image: { type: String },
    name: { type: String },
    username: { type: String, required: true },
  },
});

const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
