"use strict";

// REST API CRUD exercise:
var fs = require("fs");

var express = require("express");

var _require = require("uuid"),
    uuidv4 = _require.v4;

var app = express();
app.use(express.json());
var PORT = process.env.PORT || 3000;

function readFile() {
  var friendsList = fs.readFileSync("./friends.json");
  return JSON.parse(friendsList);
  console.log(friendsList);
} //Read:


app.get("/", function (req, res) {
  var friendsList = readFile();
  res.send(friendsList);
  console.log(friendsList);
}); //Create:

app.post("/", function (req, res) {
  var friendsList = readFile();
  var name = req.body.name;
  var friend = {
    name: name,
    id: uuidv4()
  };
  friendsList.push(friend);
  fs.writeFileSync("./friends.json", JSON.stringify(friendsList));
  res.send("You have added a friend!");
}); //Delete:

app["delete"]("/:id", function (req, res) {
  var friendsList = readFile();
  var id = req.params.id;
  var friendsToKeep = friendsList.filter(function (friend) {
    return friend.id !== id;
  });
  fs.writeFileSync("./friends.json", JSON.stringify(friendsToKeep));
  res.send("Deleted");
}); //Update:

app.put("/:id", function (req, res) {
  var friendsList = readFile();
  var id = req.params.id;
  var updatedFriend = friendsList.find(function (friend) {
    return friend.id === id;
  });
  var updatedName = req.body.updatedName;
  updatedFriend.name = updatedName;
  fs.writeFileSync("./friends.json", JSON.stringify(friendsList));
  res.send("Updated!");
}); //Listen:

app.listen(PORT, function () {
  console.log("App is listening on http://localhost:".concat(PORT));
});