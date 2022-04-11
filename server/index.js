const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => console.log(error));

const userRoutes = require("./routes/user");
const feedbackRoutes = require("./routes/feedbackRoute");
const commentRoutes = require("./routes/commentRoute");

app.use("/", userRoutes);
app.use("/", feedbackRoutes);
app.use("/", commentRoutes);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
