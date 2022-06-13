const http = require("http");
const app = require("./app");

const server = http.createServer(app);

const PORT = 1337;

app.get("/hello", (req, res) => {
  console.log("pute");
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server listen on port : ${PORT}`);
});
