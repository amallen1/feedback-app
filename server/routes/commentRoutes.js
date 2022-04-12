const express = require("express");
const router = express.Router();

const Comment = require("../models/comment");
const Feedback = require("../models/feedback");

// get comment for a suggestion
router.get("/api/get_comments/:id", async (req, res) => {
  try {
    console.log("getting comments");
    console.log(req.url);
    console.log(req.params.id);
    const { id } = req.params;

    const feedback = await Feedback.findById(id);
    const commentList = feedback.comments;
    // console.log(feedback);

    // console.log(commentList);

    // console.log(feedbackComments);
    if (commentList) {
      console.log("sending to frontend");
      res.status(200).json(commentList);
      console.log("hi");
    } else {
      res.status(400).json({ status: "error" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/add_comment", async (req, res) => {
  const { title, message, name, username } = req.body;

  //find one returns a document
  const feedback = await Feedback.findOne({ title: title });
  console.log(feedback); 

  const newComment = await Comment.create({
    content: message,
    user: {
      name: name,
      username: username,
    },
  });
  console.log(".....................");
  console.log("what is the new comment?");
  console.log(newComment);

  feedback.comments.push(newComment);

  feedback.save(function (err) {
    if (err) return handleError(err);
    console.log("Success!");
  });

  res.json({ status: "ok" });
});

module.exports = router;
