const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("ok");
});

app.listen(3100, () => {
  console.log("Server Started");
});
