const express = require("express");
const router = express.Router();

//feedback routes
const Feedback = require("../models/feedback");

router.get("/api/load-comments", async (req, res) => {
  //find all comments
  try {
    const feedbacks = await Feedback.find({});
    res.status(200).json(feedbacks);
    console.log(feedbacks);
  } catch (error) {
    console.log(error);
  }
});




module.exports = router;
