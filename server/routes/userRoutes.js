const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/api/register", async (req, res) => {
  const { name, username, email, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  if (plainTextPassword.length < 5) {
    return res.json({
      status: "error",
      error: "Password should be atleast 6 characters.",
    });
  }

  try {
    await User.create({
      name: name,
      username: username,
      email: email,
      password: password,
    });

    res.status(200).json({ status: "ok" });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      //duplicate key found in mongo database
      return res.json({ status: "error", error: "Email already in use." });
    }
    throw error;
  }
});

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  console.log(user);

  if (user && (await bcrypt.compare(password, user.password))) {
    // the username, password combination is successful
    const token = jwt.sign(
      {
        email: email,
        password: password,
      },
      "secret123" 
    );
    return res.status(200).json({
      status: "ok",
      token: token,
      name: user.name,
      username: user.username,
    });
  } else {
    return res.status(401).send({ error: "User credentials incorrect" });
  }
});

module.exports = router;
