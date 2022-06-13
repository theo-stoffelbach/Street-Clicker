const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://fs:FloriantetsonJs...@cluster0.fbppb.mongodb.net/Kitty",
  {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  }).;

const Cat = mongoose.model("Cat", { name: String });

const kitty = new Cat({ name: "Zildjian" });
kitty.save().then(() => console.log("meow"));

module.exports = app;
