const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//user routes
const User = require("../models/user");

router.post("/api/register", async (req, res) => {
  try {
    // const newPassword = await bcrypt.hash(req.body.password, 10);

    if (await User.findOne({ email: req.body.email })) {
      res.status(400).json({ status: "error", error: "Duplicate email" });
      return;
    } else {
      //creates a user in mongodb database
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
    }
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    res.json({ status: "error", error: "Duplicate email" });
  }
});

router.post("/api/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(user);

  if (user) {
    const token = jwt.sign(
      {
        email: user.email,
        password: user.password,
      },
      "secret123"
    );
    return res.status(200).json({ status: "ok", user: token });
  } else {
    return res.status(400).send("gggg");
  }
});

module.exports = router;
