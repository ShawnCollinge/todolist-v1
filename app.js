const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

var theList = [];

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let day = date.getDate();
  res.render('list', {kindOfDay: day, items: theList});
});

app.post("/", function(req, res) {
  theList.push(req.body.item);
  res.redirect("/");
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
