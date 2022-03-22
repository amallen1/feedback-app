const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URL);

mongoose.connection.once("open", () => {
  console.log("Database connected");
});

const userRoutes = require("./routes/user");

app.use("/", userRoutes);

app.listen(5000, () => {
  console.log("server running");
});
