const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Backend 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

app.listen(4000, () => console.log("Backend running on 4000"));