const express = require("express");
const router = express.Router();

//feedback routes
const Feedback = require("../models/feedback");

router.get("/api/get_suggestions", async (req, res) => {
  //find all comments with status of suggestion
  try {
    const feedbacks = await Feedback.find({ status: "suggestion" });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
  }
});

//add a suggestion to the database
router.post("/api/add_suggestion", (req, res) => {
  try {
    const feedback = Feedback.create({
      title: req.body.title,
      category: req.body.category,
      upvotes: 0,
      status: "suggestion",
      description: req.body.description,
      comments: [],
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Error creating suggestion" });
  }
});

// router.post("/api/add_comment")

module.exports = router;
