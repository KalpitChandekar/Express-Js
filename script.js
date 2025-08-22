const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("login", { heading: "Login Page" });
});

app.get("/site", function (req, res) {
  res.render("site", { heading: "PhoneHub" });
});

app.get("/error", function (res, req, next) {
  throw new Error("Page not found!");
});

app.use(function errorHandler(err, req, res, next) {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500);
  res.render("error", { error: err });
});

app.listen(3000);
