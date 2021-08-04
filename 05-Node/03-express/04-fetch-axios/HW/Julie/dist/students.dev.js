"use strict";

// jshint esversion:6
var express = require("express");

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
})); // app.use(express.json());

app.get("/", function (req, res) {
  res.sendFile(__dirname + "./students.html");
});
app.post("/", function (req, res) {
  var name = req.body.name;
  var Id = req.body.id;
  res.send("Thank you for adding your details");
});
app.get("/students", function (req, res) {
  res.sendFile(__dirname = "/students.html");
});
app.post("/students", function (req, res) {});
app.listen(3000, function () {
  console.log("Students server started on port 3000");
});