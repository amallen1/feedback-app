const express = require("express");
const router = express.Router();
const Feedback = require("../models/feedback");

router.get("/api/get_suggestions", async (req, res) => {
  //find all comments with status of suggestion
  try {
    const feedbacks = await Feedback.find({ status: "Suggestion" });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/get_feedbacks", async (req, res) => {
  //find all comments with status of planned, in progess, and live
  try {
    const feedbacks = await Feedback.find({ status: {$in: ['Planned', 'In-progress', 'Live']} });
    res.status(200).json(feedbacks);
  } catch (error) {
    console.log(error);
  }
});

//add a suggestion to the database
router.post("/api/add_suggestion", async (req, res) => {
  const { title, category, description } = req.body;

  try {
    await Feedback.create({
      title: title,
      category: category,
      upvotes: 0,
      status: "Suggestion",
      description: description,
      comments: [],
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Error creating suggestion" });
  }
});

//update a suggestion
router.put("/api/update_suggestion/:id", async (req, res) => {
  const { id } = req.params; //correct
  const { title, category, status, description } = req.body;

  try {
    const filter = { _id: id };
    const update = {
      title: title,
      category: category,
      status: status,
      description: description,
    };
    const feedback = await Feedback.findOneAndUpdate(filter, update);

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Error updating suggestion" });
  }
});

//delete a suggestion from the database
router.delete("/api/delete_suggestion/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Feedback.findByIdAndDelete({ _id: id }, () => {
      console.log("Feedback deleted");
    });

    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Error deleting suggestion" });
  }
});

//increment upvotes
router.put("/api/:id/upvote", async (req, res) => {
  // console.log("UPVOTING");

  const { id } = req.params;
  const { username } = req.body;
  try {
    Feedback.findByIdAndUpdate(
      id,
      {
        $push: { likes: username },
        $inc: {
          upvotes: 1,
        },
      },
      {
        new: true,
      }
    ).exec((err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.json(result);
      }
    });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Error upvoting suggestion" });
  }
});

//decrement upvotes
router.put("/api/:id/downvote", async (req, res) => {
  // console.log("DOWNVOTING");

  const { id } = req.params;
  const { username } = req.body;

  try {
    Feedback.findByIdAndUpdate(
      id,
      {
        $pull: { likes: username },
        $inc: {
          upvotes: -1,
        },
      },
      {
        new: true,
      }
    ).exec((err, result) => {
      if (err) {
        return res.status(400).json({ error: err });
      } else {
        res.send(result);
      }
    });
  } catch (err) {
    res.json({ status: "error", error: "Error downvoting suggestion" });
  }
});

module.exports = router;
