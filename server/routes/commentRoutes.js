const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Feedback = require("../models/feedback");
const mongo = require("mongodb");

// gets a comment for a suggestion
router.get("/api/get_comments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const feedback = await Feedback.findById(id);
    const commentList = feedback.comments;
    return res.status(200).json(commentList);
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Error getting comment" });
  }
});

router.post("/api/add_comment", async (req, res) => {
  const { title, message, name, username } = req.body;

  try {
    const feedback = await Feedback.findOne({ title: title });

    const newComment = await Comment.create({
      content: message,
      user: {
        name: name,
        username: username,
      },
    });
    console.log(newComment);

    feedback.comments.push(newComment);

    feedback.save(function (err) {
      if (err) return handleError(err);
      console.log("Success!");
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Error creating comment" });
  }
});

router.delete("/api/delete_comment/:postId/:commentId", async (req, res) => {
  const { postId, commentId } = req.params;

  try {
    await Feedback.findByIdAndUpdate(
      { _id: postId },
      { $pull: { comments: { _id: mongo.ObjectId(commentId) } } }
    );

    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Error creating comment" });
  }
});

module.exports = router;
