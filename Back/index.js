const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  console.log("pute");
  res.send("hello");
});

app.listen(1337, () => {
  console.log("dfede");
});
