"use strict";

// create a list of your favorite list (books, friends...);
// Create a route for add an item
// create a route for showing all items (method: GET) *
// create a route for deleting an item (method: DELETE) *
// create a route for updating an item (method: PUT) *
// create a route to search items by name. id etc,  (method: GET) *
var fs = require('fs');

var express = require('express');

var _require = require('uuid'),
    uuidv4 = _require.v4;

var app = express();
var PORT = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.use(express.json());

var readFriends = function readFriends() {
  var allFriends = fs.readFileSync('./hobbies.json');
  return JSON.parse(allFriends);
}; //Read the whole array:


app.get('/', function (req, res) {
  var allFriends = readFriends();
  res.send(allFriends);
}); //Post 

app.post('/', function (req, res) {
  var friend = req.body.friend;
  var FriendHobby = {
    friend: friend,
    id: uuidv4()
  };
  var allFriends = readFriends();
  allFriends.push(newFriend);
  fs.writeFileSync('./friends.json', JSON.stringify(allFriends));
  res.send(allFriends);
  console.log(body);
}); // Delete

app["delete"]('/:id', function (req, res) {
  req.params;
});
app.listen(PORT, function () {
  console.log("Example app listening at http://localhost:".concat(PORT));
});