const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const userRouter = require("./rooter/userRouter");

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://fs:FloriantetsonJs...@cluster0.fbppb.mongodb.net/Kitty",
    {
      useNewUrlParser: true,
      UseUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("conncetion reussit avec la BD");
  })
  .catch(() => console.log(error));

app.use(bodyParser.json());

app.use("/api/user", userRouter);

module.exports = app;
