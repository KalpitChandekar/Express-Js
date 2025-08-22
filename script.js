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

app.listen(3000);
