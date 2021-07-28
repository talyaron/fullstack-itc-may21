"use strict";

// jshint esversion:6
var express = require("express");

var app = express();
app.use(express.json());

var _require = require("uuid"),
    uuidv4 = _require.v4;

var fs = require("fs");

function readFile() {
  var allThings = fs.readFileSync("./things.json");
  return JSON.parse(allThings);
}

app.get("/", function (req, res) {
  var allThings = readFile();
  res.send(allThings);
});
app.post("/", function (req, res) {
  var allThings = readFile();
  console.log(allThings);
  var _req$body = req.body,
      name = _req$body.name,
      colour = _req$body.colour;
  var thing = {
    name: name,
    id: uuidv4()
  };
  allThings.push(thing);
  fs.writeFileSync("./things.json", JSON.stringify(allThings));
  res.send("Thing added");
});
app["delete"]("/:id", function (req, res) {
  var allThings = readFile();
  var id = req.params.id;
  var reducedArray = allThings.filter(function (thing) {
    return thing.id !== id;
  });
  fs.writeFileSync("./things.json", JSON.stringify(reducedArray));
  res.send("Thing deleted");
});
app.put("/:id", function (req, res) {
  var allThings = readFile();
  var id = req.params.id;
  var requiredThing = allThings.find(function (thing) {
    return thing.id === id;
  });
  var newName = req.body.newName; //YS: Why dont you use this in the line below? 

  requiredThing.name = req.body.newName; //YS: Why are you using the req.body.newName if in the line before you already have the newName? Should be:  requiredThing.name = newName;

  fs.writeFileSync("./things.json", JSON.stringify(allThings));
  res.send("Thing updated");
});
app.listen(4040, function () {
  console.log("crudnode is running on the server");
});