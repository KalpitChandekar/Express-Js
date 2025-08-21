const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Middleware working");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/profile", function (req, res) {
  res.send("This page is profile page.");
});

app.get("/profile/:username", function (req, res) {
  res.send(`This is form ${req.params.username}`);
});

app.listen(3000);
