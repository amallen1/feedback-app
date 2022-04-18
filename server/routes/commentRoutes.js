const express = require("express");
const router = express.Router();
const Comment = require("../models/comment");
const Feedback = require("../models/feedback");

// gets a comment for a suggestion
router.get("/api/get_comments/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await Feedback.findById(id);
    const commentList = feedback.comments;

    if (commentList) {
      res.status(200).json(commentList);
    } else {
      res.status(400).json({ status: "error" });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Error getting comment" });
  }
});

router.post("/api/add_comment", async (req, res) => {
  const { title, message, name, username } = req.body;

  try {
    //find one returns a document
    const feedback = await Feedback.findOne({ title: title });
    // console.log(feedback);

    const newComment = await Comment.create({
      content: message,
      user: {
        name: name,
        username: username,
      },
    });
    // console.log(".....................");
    // console.log("what is the new comment?");
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

module.exports = router;
